
export const initSidebar = () => ({
  type: 'INIT_SIDEBAR',
});

export const closeSidebar = () => ({
  type: 'SWITCH_SIDEBAR',
  open: false,
});

export const openSidebar = () => ({
  type: 'SWITCH_SIDEBAR',
  open: true,
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
