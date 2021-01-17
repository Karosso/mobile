import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Modal, Alert, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useApp } from '../../application/context/AppContext'
import { icons } from '../../assets/icons'
import { Header } from '../../components/header/Header'
import { AppStackProps, AppStackRoutes, HomeStackNavigationProp } from '../../routes/AppStack.types'
import { Colors } from '../../utils'
import { HomeButton } from './components/button/HomeButton'

import { styles } from './Home.styles'

export type HomeProps = {
  navigation: HomeStackNavigationProp,
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {

  const { isLogged, setIsLogged } = useApp()

  const { navigationService } = useApp()

  const [toggleModal, setToggleModal] = useState(false)



  const handleNavigation = (navigateTo: any) => {
    navigation.navigate(navigateTo)
    // navigationService.navigate(navigateTo)
  }

  return (
    <LinearGradient colors={[Colors.td_purple, Colors.td_purple_dark]} style={styles.container}>

      <Modal
        animationType="fade"
        transparent={true}
        visible={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon size={20} name="close" style={styles.closeButton} onPress={() => setToggleModal(!toggleModal)} />

            {
              isLogged ?
                <>
                  <TouchableHighlight
                    underlayColor={Colors.td_purple}
                    style={{borderRadius: 20}}

                    onPress={() => {
                      setToggleModal(!toggleModal);
                      handleNavigation("Curriculo");
                    }}
                  >
                    <HomeButton iconSize={20} textStyle={styles.modalText} iconColor={Colors.td_purple_dark} icon="account-outline" title="MEU CURRÍCULO" handleNavigate={handleNavigation} componentTo="Curriculo" />
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={Colors.td_purple}
                    style={{borderRadius: 20}}
                    onPress={() => {
                      setToggleModal(!toggleModal);
                      setIsLogged(!isLogged);
                    }}
                  >
                    <HomeButton iconSize={20} textStyle={styles.modalText} iconColor={Colors.td_purple_dark} icon="logout" title="SAIR" handleNavigate={() => {}} componentTo="" />
                  </TouchableHighlight>
                </>
                :
                <>
                  <TouchableHighlight
                    underlayColor={Colors.td_purple}
                    style={{borderRadius: 20}}

                    onPress={() => {
                      setToggleModal(!toggleModal);
                      handleNavigation("Login");
                    }}
                  >
                    <HomeButton iconSize={20} textStyle={styles.modalText} iconColor={Colors.td_purple_dark} icon="account-arrow-right-outline" title="ENTRAR" handleNavigate={handleNavigation} componentTo="Register" />
                    
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={Colors.td_purple}
                    style={{borderRadius: 20}}

                    onPress={() => {
                      setToggleModal(!toggleModal);
                      handleNavigation("Register");
                    }}
                  >
                   <HomeButton iconSize={20} textStyle={styles.modalText} iconColor={Colors.td_purple_dark} icon="login" title="CADASTRAR" handleNavigate={handleNavigation} componentTo="Register" />
                    
                  </TouchableHighlight>

                </>
            }

          </View>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <TouchableOpacity><Icon name="menu" size={20} color={Colors.white} /></TouchableOpacity>
        <TouchableOpacity onPress={() => setToggleModal(!toggleModal)}><Icon name="account-outline" size={20} color={Colors.white} /></TouchableOpacity>
      </View>
      <View style={styles.logoContainer} >
        <Image style={styles.image} source={icons.logo} />
        <Text style={styles.title} >TÔ DENTRO!</Text>
      </View>
      {/* <HomeButton icon="account-outline" title="MEU CURRÍCULO" handleNavigate={handleNavigation} componentTo="Curriculo" /> */}
      <HomeButton icon="clipboard-text-outline" title="TESTE VOCACIONAL" handleNavigate={handleNavigation} componentTo="VocationalTest" />
      <HomeButton icon="account-tie-outline" title="SOBRE O FUTURO" handleNavigate={handleNavigation} componentTo="AboutFuture" />
      <HomeButton icon="briefcase-search-outline" title="VAGAS DE EMPREGO" handleNavigate={handleNavigation} componentTo="Opportunities" />
      <HomeButton icon="drama-masks" title="ESPAÇO CULTURAL" handleNavigate={handleNavigation} componentTo="Culture" />

      <View style={styles.footer}>
        <HomeButton iconSize={20} textStyle={styles.footerText} icon="tag-multiple-outline" title="PROMOÇÕES" handleNavigate={handleNavigation} componentTo="" />
      </View>


    </LinearGradient>
  )
}

