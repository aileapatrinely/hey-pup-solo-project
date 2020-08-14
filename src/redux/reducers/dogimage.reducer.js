const dogImage = (state = '', action) => {
  switch (action.type) {
    case 'SET_DOG_IMAGE':
      return action.payload;
    case 'UNSET_DOG_IMAGE':
      return {};
    default:
      return state;
  }
};

export default dogImage;
