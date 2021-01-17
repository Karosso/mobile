import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useApp } from '../../application/context/AppContext'
import { icons } from '../../assets/icons'
import { HomeStackNavigationProp, LoginStackNavigationProp } from '../../routes/AppStack.types'
import { Colors } from '../../utils'

import { styles } from './Login.styles'

export type LoginProps = {
    navigation: LoginStackNavigationProp,
}

export const Login: React.FC<LoginProps> = ({ navigation }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const { setIsLogged } = useApp()

    const handleLogin = () => {
        Alert.alert('Logado com Sucesso!')
        setIsLogged(true);
        navigation.goBack()
    }

    return (
        <View style={styles.container} >
            <LinearGradient colors={[Colors.td_purple, Colors.td_purple_dark]} style={styles.logoContainer}>
                <Image style={styles.image} source={icons.logo} />
                <Text style={styles.title} >SEJA BEM-VINDO!</Text>
            </LinearGradient>

            <View style={styles.loginContainer}>
                <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={user} onChangeText={value => setUser(value)} placeholder="CPF / CNPJ" />
                <TextInput secureTextEntry placeholderTextColor={Colors.gray} style={styles.input} value={pass} onChangeText={value => setPass(value)} placeholder="SENHA" />

                <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
                    <Text style={styles.buttonText}>ACESSAR</Text>
                </TouchableOpacity>
                <TouchableOpacity><Text style={styles.subTextLink}>Recuperar senha</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} ><Text style={styles.subTextLink}>Cadastrar</Text></TouchableOpacity>
            </View>

        </View>
    )
}
