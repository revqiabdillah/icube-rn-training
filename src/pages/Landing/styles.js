import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';

export default StyleSheet.create({
  welcomeText: {
    ...Typography.FONT_BOLD_SEMI,
    fontSize: Mixins.scaleFont(16),
    textAlign: 'center',
    color: Colors.BLACK,
    marginBottom: 18,
    ...Mixins.margin(0, 0, 50, 0),
  },
  welcomeTextDescription: {
    ...Typography.FONT_REGULAR,
    fontSize: Mixins.scaleFont(13),
    lineHeight: 21,
    textAlign: 'center',
    color: Colors.BLACK,
  },
  signContainer: {
    position: 'absolute',
    padding: 30,
    top: Mixins.MAX_HEIGHT * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: Mixins.MAX_WIDTH,
  },
  postionBtnLang: {
    position: 'absolute',
    top: Mixins.MAX_HEIGHT * 0.02,
    right: Mixins.MAX_WIDTH * 0.02,
  },
  textBtnLang: {
    ...Typography.FONT_BOLD,
    color: BLACK,
  },
  btnLang: {
    width: 100,
    borderWidth: 2,
    borderColor: BLACK,
  },
  btnSignInUp: {
    height: 55,
    width: Mixins.MAX_WIDTH * 0.5,
    ...Mixins.margin(0, 0, 20, 0),
    justifyContent: 'center',
  },
  textBtnSignInUp: {
    ...Typography.FONT_BOLD,
    fontSize: Mixins.scaleFont(16),
  },
  skipText: {
    ...Typography.FONT_BOLD,
    ...Typography.FONT_UNDESCORE,
    fontSize: Mixins.scaleFont(16),
  },
});
