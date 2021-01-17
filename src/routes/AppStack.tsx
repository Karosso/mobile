// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { AppProvider } from '../application/context/AppContext';
import { AboutFuture } from '../pages/aboutFuture/AboutFuture';
import { Culture } from '../pages/culture/Culture';
import { Curriculo } from '../pages/curriculo/Curriculo';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Opportunities } from '../pages/opportunities/Opportunities';
import { Opportunity } from '../pages/opportunity/Opportunity';
import { MarketRegister } from '../pages/user/register/market/MarketRegister';
import { Register } from '../pages/user/register/Register';
import { UserRegister } from '../pages/user/register/user/UserRegister';
import { VocationalTest } from '../pages/vocationalTest/VocationalTest';
import { AppStackProps } from './AppStack.types'

export const AppStack = () => {
  const Stack = createStackNavigator<AppStackProps>();



  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Curriculo" component={Curriculo} />
          <Stack.Screen name="VocationalTest" component={VocationalTest} />
          <Stack.Screen name="AboutFuture" component={AboutFuture} />
          <Stack.Screen name="Opportunities" component={Opportunities} />
          <Stack.Screen name="Culture" component={Culture} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Opportunity" component={Opportunity} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  )
}
