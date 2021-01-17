import { StyleSheet } from 'react-native'
import { Colors, Dimensions, Mixins } from '../../utils'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        position: 'relative',
        height: '100%'
    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: Dimensions.SCALE_20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Dimensions.SCALE_20
    },
    title: {
        color: Colors.white,
        fontSize: Mixins.scaleSize(25),
        fontWeight: 'bold',
        paddingLeft: Dimensions.SCALE_16
    },
    image: {
        width: Mixins.scaleSize(40),
        resizeMode: 'contain',
    },
    logoContainer: {
        marginTop: -10,
        paddingHorizontal: Mixins.scaleSize(40),
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: Dimensions.SCALE_16
    },
    buttonTitle: {
        color: Colors.white
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Mixins.scaleSize(130)
    },
    footerText: {
        fontSize: Dimensions.SCALE_12
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginRight: Dimensions.SCALE_20
    },
    modalView: {
        margin: Dimensions.SCALE_20,
        backgroundColor: Colors.white,
        borderRadius: Dimensions.SCALE_5,
        padding: Dimensions.SCALE_8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        fontSize: Dimensions.SCALE_12,
        color: Colors.td_purple_dark,
    },
    closeButton: {
        alignSelf: 'flex-end'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
})