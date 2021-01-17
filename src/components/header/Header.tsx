import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../utils'

import { styles } from './Header.styles'

interface IHedaerProps {
    title: string,
    style?: StyleProp<ViewStyle>,
    goBack: () => void;
}

export const Header: React.FC<IHedaerProps> = ({ title, style, children, goBack }) => {
    return (
        <LinearGradient colors={[Colors.td_purple, Colors.td_purple_dark]} style={[styles.container, style]}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => goBack()}><Icon name="chevron-left" size={20} color={Colors.white} /></TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity><Icon name="account-outline" size={20} color={Colors.white} /></TouchableOpacity>
            </View>
            <View style={styles.childrenContainer}>
                {children}
            </View>
        </LinearGradient>
    )
}

