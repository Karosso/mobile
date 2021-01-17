import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, StyleProp, ViewStyle } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { icons } from '../../../assets/icons'
import { RegisterStackNavigationProp } from '../../../routes/AppStack.types'
import { Colors } from '../../../utils'
import { td_green_dark } from '../../../utils/colors'

import { styles } from './Register.styles'
import { UserRegister } from './user/UserRegister'

export type RegisterProps = {
  navigation: RegisterStackNavigationProp
}

export const Register: React.FC<RegisterProps> = ({ navigation }) => {

  const [selected, setSelected] = useState<'user' | 'market'>('user')

  const [inactive, setInactive] = useState<StyleProp<ViewStyle>>({ opacity: 0.2 })

  const toggleSelectType = (type: 'user' | 'market') => {
    setInactive({ opacity: 0.2 })
  }

  useEffect(() => {
    console.log(selected);

  }, [selected])

  return (
    <View style={styles.container}>

      <LinearGradient colors={[Colors.td_purple, Colors.td_purple_dark]} style={styles.logoContainer} >
        <Image style={styles.logoImage} source={icons.logo} />
        <Text style={styles.logoTitle} >TÔ DENTRO!</Text>
      </LinearGradient>

      <ScrollView>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => toggleSelectType('user')} style={[styles.imageContainer, selected === 'user' ? styles.active : styles.inactive]}>
            <View>
              <LinearGradient style={styles.buttonContainer} colors={[Colors.td_green, Colors.td_green_dark]}>
                <Image source={icons.user} style={styles.image} />
              </LinearGradient>
            </View>
            <Text style={styles.userTitle} >SOU JOVEM!</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleSelectType('market')} style={[styles.imageContainer, selected === 'market' ? styles.active : styles.inactive]}>
            <View>
              <LinearGradient style={styles.buttonContainer} colors={[Colors.td_blue, Colors.td_blue]}>
                <Image source={icons.market} style={styles.image} />
              </LinearGradient>
            </View>
            <Text style={styles.marketTitle} >SOU EMPRESA!</Text>
          </TouchableOpacity>
        </View>

        <UserRegister />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REALIZAR CADASTRO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  )
}
