
export const initStyles = (styles) => ({
  type: 'INIT_STYLES',
    styles: styles,
});

export const setStyles = (name, styles) => ({
  type: 'SET_STYLES',
  name: name,
  styles: styles,
});

export const adjustStyles = (name, styles) => ({
  type: 'ADJUST_STYLES',
  name: name,
  styles: styles,
});
