import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/header/Header'
import { VocationalTestStackNavigationProp } from '../../routes/AppStack.types'
import { styles } from './VocationalTest.styles'

export type VocationalTestProps = {
    navigation: VocationalTestStackNavigationProp
}

export const VocationalTest: React.FC<VocationalTestProps> = ({ navigation }) => {

    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header goBack={handleGoBack} title="TESTE VOCACIONAL" />
        </View>
    )
}
