import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';

export default StyleSheet.create({
  btnSignInUp: {
    height: 50,
    width: Mixins.MAX_WIDTH * 0.5,
    ...Mixins.margin(0, 0, 20, 0),
    justifyContent: 'center',
  },
  textBtnSignInUp: {
    ...Typography.FONT_BOLD,
    fontSize: Mixins.scaleFont(16),
  },
});
