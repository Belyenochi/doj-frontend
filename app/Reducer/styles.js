const style = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'INIT_STYLES':
      return action.styles;
    case 'SET_STYLES':
      newState[action.name] = action.styles;
      return newState;
    case 'ADJUST_STYLES':
      newState[action.name] = Object.assign({}, newState[action.name], action.styles);
      return newState;
    default:
      return state;
  }
};

export default style;
