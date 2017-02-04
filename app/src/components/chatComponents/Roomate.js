import React from 'react';
import { Label } from 'semantic-ui-react';
import '../App.css';

const Roomate = (props) => {
  return (
    <div className="roomate">
      <Label as='a' color='blue' image>
        <img src='http://semantic-ui.com/images/avatar/small/veronika.jpg' />
        Veronika B.
        <Label.Detail>Friend</Label.Detail>
      </Label>
    </div>  
  );
};

export default Roomate;
