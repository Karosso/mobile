import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { icons } from '../../../../assets/icons'
import { Colors } from '../../../../utils'

import { styles } from './UserRegister.styles'

export const UserRegister = () => {

  const [name, setName] = useState<string>('')

  return (

    <View style={styles.container}>
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="NOME *" />
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="CPF *" />
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="GÊNERO *" />
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="DATA DE NASCIMENTO *" />
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="TELEFONE" />
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="EMAIL" />
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="CRIE UMA SENHA" secureTextEntry/>
      <TextInput placeholderTextColor={Colors.gray} style={styles.input} value={name} onChangeText={value => setName(value)} placeholder="CONFIRMAR SENHA" secureTextEntry/>

      <Text style={styles.addresTilte}>ENDEREÇO:</Text>
      <View style={styles.adreesContainer}>
        <TextInput placeholderTextColor={Colors.gray} style={styles.addresInput} value={name} onChangeText={value => setName(value)} placeholder="Estado" />
        <TextInput placeholderTextColor={Colors.gray} style={styles.addresInput} value={name} onChangeText={value => setName(value)} placeholder="Cidade" />
        <TextInput placeholderTextColor={Colors.gray} style={styles.addresInput} value={name} onChangeText={value => setName(value)} placeholder="Bairro" />
        <TextInput placeholderTextColor={Colors.gray} style={styles.addresInput} value={name} onChangeText={value => setName(value)} placeholder="Rua - Número" />
        <TextInput placeholderTextColor={Colors.gray} style={styles.addresInput} value={name} onChangeText={value => setName(value)} placeholder="CEP" />
      </View>
    </View>

  )
}
