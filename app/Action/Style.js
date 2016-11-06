
export const initStyle = (name, style) => ({
  type: 'INIT_STYLE',
  name: name,
  style: style,
});

export const adjustStyle = (name, style) => ({
  type: 'ADJUST_STYLE',
  name: name,
  style: style,
});
