import { Dimensions,PixelRatio } from 'react-native';

const getDimension = Dimensions.get('window');
const guidelineBaseWidth = 375;
const dimensions = (top, right = top, bottom = top, left = right, property) => {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export const MAX_WIDTH = getDimension.width;
export const MAX_HEIGHT = getDimension.height;
export const scaleSize = size => (MAX_WIDTH/guidelineBaseWidth) * size;
export const scaleFont = size => size * PixelRatio.getFontScale();
export const margin = (top, right, bottom, left) => {
  	return dimensions(top, right, bottom, left, 'margin');
}
export const padding = (top, right, bottom, left) => {
  	return dimensions(top, right, bottom, left, 'padding');
}
export const boxShadow = (color, offset = {height:5,width:5}, radius = 1, opacity = 0.5) => {
	return {
		shadowColor: color,
		shadowOffset: offset,
		shadowOpacity: opacity,
		shadowRadius: radius,
		elevation: radius,
	};
}

export const imageActualSize = (width, height) => {
	return {
		width: width,
		height: height
	};
}