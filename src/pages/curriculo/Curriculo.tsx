import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useApp } from '../../application/context/AppContext'
import { Header } from '../../components/header/Header'
import { CurriculoStackNavigationProp } from '../../routes/AppStack.types'
import { Colors } from '../../utils'
import { styles } from './Curriculo.styles'

export type CurriculoProps = {
    navigation: CurriculoStackNavigationProp
}

export const Curriculo: React.FC<CurriculoProps> = ({ navigation }) => {

    const { setHasCurriculo } = useApp()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleSave = () => {
        setHasCurriculo(true),
        Alert.alert('Salvo!')
    }

    return (
        <View style={styles.container}>
            <Header goBack={handleGoBack} style={styles.headerContainer} title="MEU CURRÍCULO" >
                <Image source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_614041-MLB27185740295_042018-O.jpg" }} style={styles.image} />
                <Text style={styles.name}>OSCAR DIAS</Text>
                <Text style={styles.info}>16 ANOS      SION</Text>
            </Header>

            <View style={styles.curriculoContainer}>
                <Text style={styles.curriculoText} >Educação:</Text>
                <Text style={styles.curriculoText} >Ensino Técnico:</Text>
                <Text style={styles.curriculoText} >Habilidades:</Text>
                <Text style={styles.curriculoText} >Experiência:</Text>
            </View>

            <TouchableOpacity onPress={() => handleSave()} style={styles.button}>
                <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>

        </View>
    )
}
