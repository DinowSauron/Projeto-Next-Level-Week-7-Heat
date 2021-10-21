import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center'
    },
    
    avatar: {
        borderWidth: 4,
        backgroundColor: COLORS.BLACK_SECONDARY,
        borderColor: COLORS.BLACK_SECONDARY,
    }
});