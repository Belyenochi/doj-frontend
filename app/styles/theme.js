import { fade } from 'material-ui/utils/colorManipulator';
import { spacing, colors } from 'material-ui/styles';

const {
  pinkA200,
  grey100, grey200, grey300, grey400, grey500,
  indigo300, indigo500,
  white, darkBlack, fullBlack,
} = colors;

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: indigo300,
    primary2Color: indigo500,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: indigo300,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  tableRow: {
    hoverColor: grey200,
    stripeColor: fade(grey200, 0.5),
  },
};
