import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../utils'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        position: 'relative',
        height: '100%',
    },
    title: {
        color: Colors.white,
        fontSize: Mixins.scaleSize(25),
        fontWeight: 'bold',
        paddingLeft: Dimensions.SCALE_16
    },
    image: {
        width: Mixins.scaleSize(80),
        resizeMode: 'contain',
    },
    logoContainer: {
        paddingHorizontal: Mixins.scaleSize(40),
        alignItems: 'center',
        paddingBottom: Mixins.scaleSize(40),
    },
    loginContainer: {
        alignItems: 'center',
        marginTop: Mixins.scaleSize(50)
    },
    input: {
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(30),
        borderBottomColor: Colors.gray,
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
        marginTop: Mixins.scaleSize(60),
        marginBottom: 5
    },
    buttonText: {
        color: Colors.white,
    },
    subText: {
        color: Colors.gray,
        fontSize: Dimensions.SCALE_8,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    subTextLink: {
        color: Colors.td_green,
        fontSize: Dimensions.SCALE_8,
        textAlignVertical: 'center'
    } 
})