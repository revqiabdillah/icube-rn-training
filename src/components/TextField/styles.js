import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';
import {MAX_WIDTH} from '../../styles/mixins';

export default StyleSheet.create({
  containerField: {
    borderRadius: 100,
    borderColor: Colors.GRAY_MEDIUM,
    borderWidth: 1,
    height: 50,
    ...Mixins.padding(10, 20, 10, 20),
    ...Mixins.margin(0, 20, 5, 20),
    width: MAX_WIDTH * 0.8,
    ...Typography.FONT_SIZE_16,
  },
});
