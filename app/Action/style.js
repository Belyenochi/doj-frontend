
export const initStyle = (style) => ({
  type: 'INIT_STYLE',
  style: style,
});

export const setStyle = (name, style) => ({
  type: 'SET_STYLE',
  name: name,
  style: style,
});

export const adjustStyle = (name, style) => ({
  type: 'ADJUST_STYLE',
  name: name,
  style: style,
});
