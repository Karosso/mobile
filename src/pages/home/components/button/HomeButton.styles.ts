import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../../../utils'


export const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        paddingVertical: Dimensions.SCALE_10,
        paddingHorizontal: Mixins.scaleSize(40)
    },
    buttonTitle: {
        fontSize: Mixins.scaleSize(20),
        letterSpacing: Mixins.scaleSize(2),
        paddingLeft: Dimensions.SCALE_16,
        color: Colors.white
    }
})