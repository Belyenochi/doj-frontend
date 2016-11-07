
export const initSidebar = () => ({
  type: 'INIT_SIDEBAR',
});

export const closeSidebar = () => ({
  type: 'CLOSE_SIDEBAR',
});

export const openSidebar = () => ({
  type: 'OPEN_SIDEBAR',
});

export const switchSidebar = (open) => ({
  type: 'SWITCH_SIDEBAR',
  open: open,
});

export const fixedSidebar = () => ({
  type: 'FIXED_SIDEBAR',
});

export const unfixedSidebar = () => ({
  type: 'UNFIXED_SIDEBAR',
});
