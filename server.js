const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const SocketStore = require('./core/sockets/socketStore');

const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
module.exports.app = app;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./app/build'))

const SocketStorage = new SocketStore();
// app.get('/', (req, res) => {

//   res.status(200).send(error);
// });

app.get('/findGlobalRoom', (req, res) => {
  dataHandler.createSession(req.session.userId, req.query.latitude, req.query.longitude)
  .then(sessionCreated => {
    dataHandler.findGlobalRoom(req.session.userId, (error, result, host) => {
      if (error) {
        res.status(500).send(error);
      } else {
        req.session.roomId = result;
        res.status(200).json({'host' : host, 'roomId' : result});
      } 
    })
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/mapLocations', (req, res) => {
  dataHandler.getMapLocations((error, result) => {
    console.log(error, result);
    if(error){
      res.status(500).send(error);
    } else {
      res.status(200).json(result);
    }
  })
})
app.get('/findLocalRoom', (req, res) => {
 dataHandler.createSession(req.session.userId, req.query.latitude, req.query.longitude)
 .then(sessionCreated => {
    dataHandler.findLocalRoom(req.session.userId, req.query.latitude, req.query.longitude, (error, result, host, distance) => {
      if (error) {
        res.status(500).send(error);
      } else {
        req.session.roomId = result;
        res.status(200).json({'host' : host, 'roomId' : result, 'distance' : distance});
      }
    })
 })
 .catch(error => {
   res.status(200).send(error);
 })
})

app.get('/findCommonUser', (req, res) => {
  dataHandler.getUserInterests(req.session.userId, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else if (result.length === 0) {
      res.status(200).json({'hasNoInterests' : true})
    } else {
      dataHandler.findCommonUser(req.session.userId, (error, result, commonInterests) => {
        if (error) {
          res.status(500).send(error);
        } else {
          req.session.roomId = result;
          res.status(200).json({'roomId' : result, 'interests' : commonInterests});
        } 
      })
    }
  })
});

app.post('/exitChat', (req, res) => {
  dataHandler.exitRoom(req.session.userId, error => {
    if (error) {
      res.status(500).send(error);
    } else {
      req.session.roomId = null;
      res.status(200).send('Exit Successful')

    }
  })
})

app.post('/privateRoom', (req, res) => {
  dataHandler.userLogout(req.session.userId, (err) => {
    if(err) {
      res.status(500).send(err);
    } else {
      req.session.roomId = req.body.id;
      res.status(200).send('New private room created')
    }
  });
});




// -----------------------------------------------
//                SOCKETS
// -----------------------------------------------
// listening for socket connection from client
io.on('connection', (socket) => {
  console.log('SOCKET.io --> ', socket.id );

  socket.on('action', (action) => {
    if (action.type === 'server/connected'){
      action.data.socket = socket.id
      const roomData = SocketStorage.findRoom(action.data);

      socket.emit('action', {type:'INIT_CHAT_IO', data: roomData});
    } if(action.type) 
  });

  //socket.brodcast.to(socket.id).emit('request_info_io', socket.id);
  //socket.brodcast.to(socket.id).emit('action', { type: 'REQUEST_INFO_IO', data: socket.id });











  //socket.brodcast.to(socket.id).emit('request_info_io', socket.id);

  socket.on('request_info_resp_io', (id, data) => {
    
  });  


  //listening for and joining room
  socket.on('join room', room => {
    console.log('joining room ', room);
    socket.broadcast.to(room).emit('update user list');
    socket.join(room);
  })

  socket.on('announce join', announcement => {
    socket.to(announcement.room).emit('message', {
      body: announcement.user + ' has joined the room.',
      from: 'Admin',
      user: 'Admin',
      socketID: 0
    });
  });

  //listening for incoming messages
  socket.on('message', message => {
    console.log('you are sending the message to room: ', message.room);
    //broadcasting messages to everyone except sender
    socket.broadcast.to(message.room).emit('message', {
      body: message.body,
      from: message.from,
      user: message.user,
      socketId: message.socketId
    })
  })

  //listening for a private chat request from client
  socket.on('privateRequest', pcData => {
    //relaying the private chat request to recipient
    socket.broadcast.to(pcData.receiver).emit('requestModal', pcData);
  })

  //listening for an acceptance from receiver of private chat request
  socket.on('acceptedRequest', pcData => {
    //replying to sender that the recipient has accepted the request
    socket.broadcast.to(pcData.sender).emit('join private', pcData);
  })

  //listening for a request to leave current room
  socket.on('leaveRoom', leaverData => {
    console.log("leaving room ", leaverData.room);
    socket.broadcast.to(leaverData.room).emit('message', {
      body: leaverData.user + ' has left the room.',
      from: 'Admin',
      user: 'Admin',
      socketID: 0
    })
    socket.broadcast.to(leaverData.room).emit('update user list');
    //leaving current room
    socket.leave(leaverData.room);
  })

  //listening for a declined private chat request
  socket.on('declineRequest', pcData => {
    //replying to sender that the request has been declined
    socket.broadcast.to(pcData.sender).emit('declined', pcData)
  })
  // console.log('this is the object keys: ', Object.keys(io.sockets.sockets));
  socket.on('disconnect', () => {
    io.emit('update user list');
  })
})


server.listen(port, () => {
  console.log('Listening On localhost:' + port);
});
// database.sync()
//   .then(res => {
//     //must listen on server, not app, otherwise sockets won't connect
//
//   })
//   .catch(error => {
//     console.log('Database did not sync: ', error)
//   })