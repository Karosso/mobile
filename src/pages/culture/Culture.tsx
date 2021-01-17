import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { CultureStackNavigationProp } from '../../routes/AppStack.types'
import { styles } from './Culture.styles'

export type CultureProps = {
    navigation: CultureStackNavigationProp
}

export const Culture: React.FC<CultureProps> = ({ navigation }) => {

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Header goBack={handleGoBack} title="ESPAÇO CULTURAL" />
            <ScrollView>

                <Card
                    date="15 JAN"
                    hora="08:00"
                    description="Breve descrição do evento com detalhes e pequena programação de até duas linhas"
                    local="Rua jota, N° 10"
                    title="Nome do Evento"
                />

                <Card
                    date="15 JAN"
                    hora="08:00"
                    description="Breve descrição do evento com detalhes e pequena programação de até duas linhas"
                    local="Rua jota, N° 10"
                    title="Nome do Evento"
                />

                <Card
                    date="15 JAN"
                    hora="08:00"
                    description="Breve descrição do evento com detalhes e pequena programação de até duas linhas"
                    local="Rua jota, N° 10"
                    title="Nome do Evento"
                />

                <Card
                    date="15 JAN"
                    hora="08:00"
                    description="Breve descrição do evento com detalhes e pequena programação de até duas linhas"
                    local="Rua jota, N° 10"
                    title="Nome do Evento"
                />

                <Card
                    date="15 JAN"
                    hora="08:00"
                    description="Breve descrição do evento com detalhes e pequena programação de até duas linhas"
                    local="Rua jota, N° 10"
                    title="Nome do Evento"
                />
            </ScrollView>
        </View>
    )
}
