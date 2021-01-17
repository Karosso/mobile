import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../utils'

export const styles = StyleSheet.create({
    container: {
    },
    infoContainer: {
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.gray_dark,
        fontSize: Dimensions.SCALE_20,
        marginBottom: Dimensions.SCALE_16
    },
    description: {
        marginRight: 100,
        color: Colors.gray,
        fontSize: Dimensions.SCALE_15,
        flexWrap: 'wrap'
    },
    details: {
        flexDirection: 'row'
    },
    detailsItem: {
        color: Colors.gray,
        fontSize: Dimensions.SCALE_10
    },
    button: {
        backgroundColor: Colors.td_green,
        borderRadius: Dimensions.SCALE_16,
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(30),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: Mixins.scaleSize(60)
    },
    buttonText: {
        color: Colors.white
    },
    opportunityContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Mixins.scaleSize(25),
        paddingVertical: Mixins.scaleSize(60),
    }
})