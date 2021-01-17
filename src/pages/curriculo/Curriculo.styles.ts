import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../utils'

export const styles = StyleSheet.create({
    container: {
        
    },
    headerContainer: {
        paddingBottom: Dimensions.SCALE_20
    },
    image: {
        width: Mixins.scaleSize(80),
        height: Mixins.scaleSize(80),
        borderRadius: 80,
        resizeMode: 'contain',
    },
    logoContainer: {
        paddingHorizontal: Mixins.scaleSize(40),
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: Mixins.scaleSize(25),
        color: Colors.white 
    },
    info: {
        fontSize: Dimensions.SCALE_12,
        color: Colors.white 
    },
    curriculoContainer: {
        padding: Mixins.scaleSize(40)
    },
    curriculoText: {
        fontSize: Dimensions.SCALE_15,
        color: Colors.gray,
        paddingVertical: Dimensions.SCALE_16
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
})