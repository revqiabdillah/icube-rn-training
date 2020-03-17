import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';

export default StyleSheet.create({
  textHref: {
    ...Typography.FONT_BOLD,
    fontSize: Mixins.scaleFont(16),
    ...Typography.FONT_UNDESCORE,
  },
});
