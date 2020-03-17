import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';
import {MAX_WIDTH} from '../../styles/mixins';

export default StyleSheet.create({
  containerSignin: {
    ...Mixins.padding(20, 0, 0, 0),
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
  signupText: {
    ...Typography.FONT_BOLD,
    ...Typography.FONT_UNDESCORE,
  },
  hrefForgorPasswd: {
    ...Typography.FONT_BOLD_SEMI,
  },
  form: {
    ...Mixins.margin(10, 0, 10, 0),
  },
  inlineForm: {
    display: 'flex',
    flexDirection: 'row',
    width: MAX_WIDTH * 0.9,
    alignItems: 'center',
    ...Mixins.padding(0, 0, 0, 10),
  },
  fieldInline: {
    width: MAX_WIDTH * 0.5,
    ...Mixins.margin(0, 10, 0, 0),
  },
  btnInline: {
    width: MAX_WIDTH * 0.3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOtp: {
    ...Mixins.margin(0, 0, 30, 0),
  },
  fieldSignup: {
    width: MAX_WIDTH * 0.85,
  },
  btnVerify: {
    backgroundColor: Colors.GRAY_DARK,
    borderColor: Colors.GRAY_DARK,
  },
});
