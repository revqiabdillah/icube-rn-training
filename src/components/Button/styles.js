import { StyleSheet } from 'react-native';

import { 
    AppStyles,
    Mixins,
    Colors,
    Typography
} from '../../styles';

const small = {
    width: 150,
    borderWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
}

const rounded = {
    borderRadius: 100,
};

const textSmall = {
    fontSize: Mixins.scaleFont(12),
}

const textCenter = {
    textAlign: 'center', 
}

const textSmallProperty = {
    ...Typography.FONT_BOLD_SEMI,
    ...textSmall,
    ...textCenter,
}

export default styles = StyleSheet.create({
    button: {
        borderColor: Colors.PRIMARY,
        backgroundColor: 'transparent',
        ...small,
        ...rounded,
    },
    buttonText: {
        ...textSmallProperty,
        color: Colors.PRIMARY,
    },
    buttonTextActive: {
        ...textSmallProperty,
        color: Colors.WHITE
    }
});