import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/header/Header'
import { AboutFutureStackNavigationProp } from '../../routes/AppStack.types'
import { styles } from './AboutFuture.styles'

export type AboutFutureProps = {
    navigation: AboutFutureStackNavigationProp
}

export const AboutFuture: React.FC<AboutFutureProps> = ({ navigation }) => {

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Header goBack={handleGoBack} title="SOBRE O FUTURO" />
        </View>
    )
}
