
const style = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'INIT_STYLE':
      return action.style;
    case 'SET_STYLE':
      newState[action.name] = action.style;
      return newState;
    case 'ADJUST_STYLE':
      newState[action.name] = Object.assign({}, newState[action.name], action.style);
      return newState;
    default:
      return state;
  }
};

export default style;
