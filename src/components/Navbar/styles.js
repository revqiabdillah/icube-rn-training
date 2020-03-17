import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';

export default StyleSheet.create({
  containerNav: {
    backgroundColor: Colors.WHITE,
    height: 60,
    ...Mixins.boxShadow('#f2f2f2'),
  },
  backButton: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  containerTextNav: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNav: {
    ...Typography.FONT_BOLD,
    fontSize: 16,
    color: Colors.PRIMARY,
  },
});
