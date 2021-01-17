import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../../utils'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    },
    logoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: Mixins.scaleSize(90)
    },
    logoTitle: {
        color: Colors.white,
        fontSize: Mixins.scaleSize(25),
        fontWeight: 'bold',
        paddingLeft: Dimensions.SCALE_16
    },
    logoImage: {
        width: Mixins.scaleSize(40),
        resizeMode: 'contain',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Dimensions.SCALE_16
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Dimensions.SCALE_20
    },
    buttonContainer: {
        width: Mixins.scaleSize(110),
        height: Mixins.scaleSize(110),
        borderRadius: Dimensions.SCALE_20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userTitle: {
        marginTop: Dimensions.SCALE_10,
        color: Colors.td_green_dark,
        fontSize: Dimensions.SCALE_16,
    },
    marketTitle: {
        marginTop: Dimensions.SCALE_10,
        color: Colors.td_blue_dark,
        fontSize: Dimensions.SCALE_16,
    },
    image: {
        width: Mixins.scaleSize(80),
        resizeMode: 'contain',
    },
    input: {
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(30),
        borderBottomColor: Colors.white,
        borderBottomWidth: 1,
        padding: 0,
        textAlign: 'center'
    },
    button: {
        backgroundColor: Colors.td_green,
        borderRadius: Dimensions.SCALE_16,
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(30),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: Colors.white
    },
    inactive: {
        opacity: 0.2
    },
    active: {
        opacity: 1
    }
})