import { StyleSheet } from 'react-native';

import { 
    AppStyles,
    Mixins,
    Colors,
    Typography
} from '../../styles';

export default styles = StyleSheet.create({
    welcomeText: {
        ...Typography.FONT_BOLD,
        fontSize: Mixins.scaleFont(21),
        textAlign: 'center',
        color: Colors.BLACK,
        marginBottom: 18
    },
    welcomeTextDescription: {
        ...Typography.FONT_REGULAR,
        fontSize: Mixins.scaleFont(13),
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.BLACK
    },
    signContainer: {
        position: 'absolute',
        padding: 30,
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});