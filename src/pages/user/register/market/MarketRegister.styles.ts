import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../../../utils'

export const styles = StyleSheet.create({
    container: {
        paddingVertical: Dimensions.SCALE_20,
        alignItems: 'center',
    },
    input: {
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(30),
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        padding: 0,
    },
    addresTilte: {
        color: Colors.gray_dark,
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(30),
        paddingTop: Dimensions.SCALE_10,
    },
    adreesContainer: {
        paddingHorizontal: Dimensions.SCALE_16,
        justifyContent: 'flex-start'
    },
    addresInput: {
        fontSize: Dimensions.SCALE_10,
        width: Mixins.scaleSize(180),
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        paddingHorizontal: Dimensions.SCALE_10,
        paddingVertical: 0
    }
})