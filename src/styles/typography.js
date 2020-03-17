import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Montserrat-Regular';
export const FONT_FAMILY_BOLD = 'Montserrat-Bold';
export const FONT_FAMILY_BOLD_SEMI = 'Montserrat-SemiBold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
};

export const FONT_BOLD_SEMI = {
  fontFamily: FONT_FAMILY_BOLD_SEMI,
};

export const FONT_UNDESCORE = {
  textDecorationLine: 'underline',
};
