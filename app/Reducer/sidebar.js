const resolve = (state, action) => {
  switch (action.type) {
    case 'INIT_SIDEBAR':
      return {
        open: false,
      };
    case 'SWITCH_SIDEBAR':
      return {
        open: action.open !== undefined
          ? action.open
          : !state.open,
      };
    default:
      return {};
  }
}

const sidebar = (state = {}, action) => {
  return {
    ...state,
    ...resolve(state, action),
  };
};

export default sidebar;
