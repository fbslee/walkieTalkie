
export function changeRoom(room) {
  return {
    type: 'CHANGE_CHAT_ROOM',
    payload: room,
  };
}

export function chatExit() {
  return {
    type: 'CHAT_EXIT',
    payload: false,
  };
}

export function chatSelection(inputRoomId, searchOptions, result) {
  return {
    type: 'CHAT_SELECT',
    payload: {
      inputRoomId, searchOptions, result,
    },
  };
}
