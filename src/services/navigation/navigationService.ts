import React from 'react';
import {
  StackActions,
  NavigationContainerRef,
  Route,
  NavigationAction,
  NavigationState,
} from '@react-navigation/native';

export interface INavigationService {
    navigate(name: string, params?: object): void;
    goBack(): void;
  }

export const containerNavigationRef = React.createRef<NavigationContainerRef>();

export const NavigationService = (): INavigationService => {

  const goBack = (): void => {
    containerNavigationRef.current?.goBack();
  };

  const navigate = (name: any, params?: object) => {
    containerNavigationRef.current?.navigate(name, params);
  };

  return { goBack, navigate };
};
