import { Text as DefaultText } from 'react-native';
import { useThemeColors } from '../../hooks/useThemeColors';

const Text = ({style, ...rest}) => {
    const { colors } = useThemeColors();

    return (
        <DefaultText style ={[ {color: colors.primary, fontFamily: 'Roboto-Regular'}]} {...rest}/>
    );
};

const InfoText = ({style, ...rest}) => {
    const { colors } = useThemeColors();

    return (
        <DefaultText style ={[ {color: colors.secondary, fontFamily: 'Roboto-Regular', fontSize: 10} ]} {...rest}/>
    );
};

const InfoTextBold = ({style, ...rest}) => {
    const { colors } = useThemeColors();

    return (
        <DefaultText style ={[ {color: colors.secondary, fontFamily: 'Roboto-Bold', fontSize: 18} ]} {...rest}/>
    );
};

export { Text, InfoText, InfoTextBold };
export default Text;