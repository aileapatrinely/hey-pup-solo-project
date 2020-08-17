const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHAT':
      return action.payload;
    case 'CLEAR_CHAT':
      return {};
    default:
      return state;
  }
};

export default chatReducer;
