import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../utils'

export const styles = StyleSheet.create({
    container: {
        padding: Dimensions.SCALE_20,
        flexDirection: 'row'
    },
    imageContainer: {
        width: 100,
        height: 100,
        backgroundColor: Colors.gray,
        marginRight: Dimensions.SCALE_20,
        
    },
    infoContainer: {
        justifyContent: 'space-between'
    },
    tilte: {
        color: Colors.gray_dark,
        fontSize: Dimensions.SCALE_16
    },
    description: {
        marginRight: 100,
        color: Colors.gray,
        fontSize: Dimensions.SCALE_12,
        flexWrap: 'wrap'
    },
    details: {
        flexDirection: 'row'
    },
    detailsItem: {
        color: Colors.gray,
        fontSize: Dimensions.SCALE_8
    },
})