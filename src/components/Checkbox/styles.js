import {StyleSheet} from 'react-native';

import {Mixins, Colors, Typography} from '../../styles';
import {PRIMARY, WHITE, BLACK} from '../../styles/colors';
import {MAX_WIDTH} from '../../styles/mixins';

export default StyleSheet.create({
  containerCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: MAX_WIDTH * 0.9,
    ...Mixins.padding(0, 0, 0, 10),
    ...Mixins.margin(0, 0, 10, 0),
  },
  label: {
    ...Typography.FONT_REGULAR,
    ...Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
  checkbox: {
    borderRadius: 100,
    borderWidth: 1,
    width: 20,
    height: 20,
    ...Mixins.margin(0, 10, 0, 0),
    borderColor: Colors.GRAY_MEDIUM,
  },
  active: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
  },
  checkMark: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
