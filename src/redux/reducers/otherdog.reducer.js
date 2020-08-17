const otherdogReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OTHER':
      return action.payload;
    case 'UNSET_OTHER':
      return [];
    default:
      return state;
  }
};

export default otherdogReducer;
