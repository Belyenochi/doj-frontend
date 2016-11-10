const resolve = (state, action) => {
  switch (action.type) {
    case 'INIT_SIDEBAR':
      return {
        open: false,
        fixed: false,
      };
    case 'SWITCH_SIDEBAR':
      return {
        open: action.open !== undefined
          ? action.open
          : !state.open,
      };
    case 'FIXED_SIDEBAR':
      return {
        fixed: true,
      };
    case 'UNFIXED_SIDEBAR':
      return {
        fixed: false,
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
