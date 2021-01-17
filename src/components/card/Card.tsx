import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Dimensions } from '../../utils'

import { styles } from './Card.styles'

interface ICardProps {
    title: string,
    description: string,
    date: string,
    hora?: string,
    local: string,
    navigate?: any
}

export const Card: React.FC<ICardProps> = ({ title, date, description, hora, local, navigate }) => {
    return (
        <TouchableOpacity onPress={() => navigate()} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: "" }} />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.tilte}>{`${date} | ${title}`}</Text>
                <Text style={styles.description}>{description} </Text>
                <View style={styles.details}>
                    {hora &&  <Text style={styles.detailsItem}>HORÁRIO: {hora}</Text>}
                    <Text style={[styles.detailsItem, { marginLeft: Dimensions.SCALE_16 }]}>LOCAL: {local}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

