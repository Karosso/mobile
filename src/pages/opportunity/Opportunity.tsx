import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useApp } from '../../application/context/AppContext'
import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { OpportunitiesStackNavigationProp, OpportunityStackNavigationProp } from '../../routes/AppStack.types'
import { Dimensions } from '../../utils'
import { styles } from './Opportunity.styles'

export type OpportunityProps = {
    navigation: OpportunityStackNavigationProp
}

export interface IOpportunity {
    name: string,
    title: string,
    description: string,
    local: string,
    hora: string,
    information: string
}

const data: IOpportunity = {
    name: 'Empresa',
    title: 'Assitente',
    description: 'Breve descrição da vaga em questão, funções e etc...',
    local: "Rua jota, N° 10",
    hora: '08:00 - 18:00',
    information: 'Outras informações pertinentes'
}

export const Opportunity: React.FC<OpportunityProps> = ({ navigation }) => {

    const [opportunityData, setOpportunityData] = useState<IOpportunity>(data)

    const { isLogged, hasCurriculo } = useApp()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleCandidate = () => {
        if(!isLogged){
            Alert.alert('Faça Login ou cadastre-se para candidatar a vaga')
            navigation.navigate('Login')
        } else {
            if(hasCurriculo){
                Alert.alert('Candidatura efetuada com sucesso!')
            } else {
                Alert.alert('Cadastre seu currículo para continuar')
                navigation.navigate('Curriculo')
            }
        }
    }

    return (
        <View style={styles.container}>
            <Header goBack={handleGoBack} title="EMPREGOS" />

            <View style={styles.opportunityContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{`${opportunityData.name} | ${opportunityData.title}`}</Text>
                    <Text style={styles.description}>{opportunityData.description} </Text>
                    <Text style={styles.description}>{opportunityData.information} </Text>
                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>HORÁRIO: {opportunityData.hora}</Text>
                        <Text style={[styles.detailsItem, { marginLeft: Dimensions.SCALE_16 }]}>LOCAL: {opportunityData.local}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => handleCandidate()} style={styles.button}>
                    <Text style={styles.buttonText}>CANDIDATAR A VAGA</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
