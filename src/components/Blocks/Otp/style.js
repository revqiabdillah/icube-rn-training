import {StyleSheet} from 'react-native';
import {Mixins, Colors, Typography} from '../../../styles';

export default StyleSheet.create({
  viewOtp: {
    ...Mixins.margin(0, 0, 30, 0),
  },
  inlineForm: {
    display: 'flex',
    flexDirection: 'row',
    width: Mixins.MAX_WIDTH * 0.9,
    alignItems: 'center',
    ...Mixins.padding(0, 0, 0, 10),
  },
  fieldInline: {
    width: Mixins.MAX_WIDTH * 0.5,
    ...Mixins.margin(0, 10, 0, 0),
  },
  btnInline: {
    width: Mixins.MAX_WIDTH * 0.3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnVerify: {
    backgroundColor: Colors.GRAY_DARK,
    borderColor: Colors.GRAY_DARK,
  },
  timingReqOtp: {
    ...Mixins.margin(5, 0, 5, 20),
    fontSize: Typography.FONT_SIZE_10,
  },
});
