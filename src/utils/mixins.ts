import { Dimensions, StyleProp, Platform } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => scaleSize(size); //size * PixelRatio.getFontScale();

function dimensions(top: number, right = top, bottom = top, left = right, property: string) {
  let styles: StyleProp<any> = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top: number, right = top, bottom = top, left = right) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: number, right = top, bottom = top, left = right) {
  return dimensions(top, right, bottom, left, 'padding');
}

export const boxShadow = (value = 8, shadowColor = '#000') => {
  return Platform.select({
    ios: {
      shadowColor: shadowColor,
      shadowOffset: {
        width: 0,
        height: Math.floor(value / 2),
      },
      shadowOpacity: value * 0.0375,
      shadowRadius: value * 0.58125,
    },
    android: {
      elevation: value,
    },
  });
};