import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { AppStackProps } from '../../routes/AppStack.types'
import { INavigationService, NavigationService } from '../../services/navigation/navigationService'

export type IAppContext = {
    navigationService: INavigationService;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    hasCurriculo: boolean;
    setHasCurriculo: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext)

export const AppProvider: React.FC = ({ children }) => {

    const navigationService: INavigationService = NavigationService();

    const [isLogged, setIsLogged] = useState<boolean>(false)

    const [hasCurriculo, setHasCurriculo] = useState(false)

    return (
        <AppContext.Provider
            value={{
                navigationService,
                isLogged,
                setIsLogged,
                hasCurriculo,
                setHasCurriculo
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = (): IAppContext => {
    const appContext = React.useContext<IAppContext>(AppContext);
    return appContext;
}
