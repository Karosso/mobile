import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { OpportunitiesStackNavigationProp } from '../../routes/AppStack.types'
import { styles } from './Opportunities.styles'

export type OpportunitiesProps = {
    navigation: OpportunitiesStackNavigationProp
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ navigation }) => {

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleNavigate = () => {
        navigation.navigate('Opportunity')
    }

    return (
        <View style={styles.container}>
            <Header goBack={handleGoBack} title="EMPREGOS" />
            <ScrollView>
                <Card
                    navigate={handleNavigate}
                    date="Empresa"
                    hora="08:00"
                    description="Breve descrição da vaga em questão, funções e etc..."
                    local="Rua jota, N° 10"
                    title="Cargo"
                />
                <Card
                    navigate={handleNavigate}
                    date="Empresa"
                    hora="08:00"
                    description="Breve descrição da vaga em questão, funções e etc..."
                    local="Rua jota, N° 10"
                    title="Cargo"
                />
                <Card
                    navigate={handleNavigate}
                    date="Empresa"
                    hora="08:00"
                    description="Breve descrição da vaga em questão, funções e etc..."
                    local="Rua jota, N° 10"
                    title="Cargo"
                />
                <Card
                    navigate={handleNavigate}
                    date="Empresa"
                    hora="08:00"
                    description="Breve descrição da vaga em questão, funções e etc..."
                    local="Rua jota, N° 10"
                    title="Cargo"
                />
                <Card
                    navigate={handleNavigate}
                    date="Empresa"
                    hora="08:00"
                    description="Breve descrição da vaga em questão, funções e etc..."
                    local="Rua jota, N° 10"
                    title="Cargo"
                />
                <Card
                    navigate={handleNavigate}
                    date="Empresa"
                    hora="08:00"
                    description="Breve descrição da vaga em questão, funções e etc..."
                    local="Rua jota, N° 10"
                    title="Cargo"
                />
            </ScrollView>
        </View>
    )
}
