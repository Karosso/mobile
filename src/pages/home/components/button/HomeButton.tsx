import React from 'react'
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../../../utils'

import { styles } from './HomeButton.styles'

interface IHomeButtonProps {
    title: string,
    icon: string,
    style?: StyleProp<ViewStyle>
    handleNavigate: (text: string) => void | (() => void);
    componentTo: string;
    iconSize?: number;
    textStyle?: StyleProp<TextStyle>;
    iconColor?: string
}

export const HomeButton: React.FC<IHomeButtonProps> = ({ title, icon, style, handleNavigate, componentTo, iconSize, textStyle, iconColor }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]} onPress={() => handleNavigate(componentTo)}>
            <Icon name={icon} size={iconSize || 30} color={iconColor || Colors.white} />
            <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

