import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';

export default StyleSheet.create({
  containerSignin: {
    ...Mixins.padding(Mixins.MAX_WIDTH * 0.1, 30, 0, 30),
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
    ...Mixins.margin(10, 0, 30, 0),
  },
});
