const resolve = (action) => {
  switch (action.type) {
    case 'INIT_SIDEBAR':
      return {
        open: false,
        fixed: false,
      };
    case 'OPEN_SIDEBAR':
      return {
        open: true,
      };
    case 'CLOSE_SIDEBAR':
      return {
        open: false,
      };
    case 'SWITCH_SIDEBAR':
      return {
        open: action.open,
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

const Sidebar = (state = {}, action) => {
  return {
    ...state,
    ...resolve(action),
  };
};

export default Sidebar;
