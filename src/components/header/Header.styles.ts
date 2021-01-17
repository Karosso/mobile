import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../utils'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.SCALE_16
        
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Dimensions.SCALE_16
    },
    title: {
        color: Colors.white
    },
    childrenContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})