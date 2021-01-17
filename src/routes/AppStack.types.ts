import { NavigationProp, RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AppStackProps = {
  Home: undefined;
  Register: undefined;
  Curriculo: undefined;
  VocationalTest: undefined;
  AboutFuture: undefined;
  Opportunities: undefined;
  Culture: undefined;
  Opportunity: undefined
  Login: undefined
};

export type AppStackRoutes = 
  "Home" |
  "Register" |
  "Curriculo" |
  "VocationalTest" |
  "AboutFuture" |
  "Opportunities" |
  "Culture" |
  "Opportunity" |
  "Login" |
  undefined
;

export type HomeStackNavigationProp = NavigationProp<AppStackProps, 'Home'>;
export type RegisterStackNavigationProp = NavigationProp<AppStackProps, 'Register'>;
export type CurriculoStackNavigationProp = NavigationProp<AppStackProps, 'Curriculo'>;
export type VocationalTestStackNavigationProp = NavigationProp<AppStackProps, 'VocationalTest'>;
export type AboutFutureStackNavigationProp = NavigationProp<AppStackProps, 'AboutFuture'>;
export type OpportunitiesStackNavigationProp = NavigationProp<AppStackProps, 'Opportunities'>;
export type CultureStackNavigationProp = NavigationProp<AppStackProps, 'Culture'>;
export type OpportunityStackNavigationProp = NavigationProp<AppStackProps, 'Opportunity'>;
export type LoginStackNavigationProp = NavigationProp<AppStackProps, 'Login'>;

export type HomeStackRouteProp = RouteProp<AppStackProps, 'Home'>;
export type RegisterStackRouteProp = RouteProp<AppStackProps, 'Register'>;
export type CurriculoStackRouteProp = RouteProp<AppStackProps, 'Curriculo'>;
export type VocationalTestStackRouteProp = RouteProp<AppStackProps, 'VocationalTest'>;
export type AboutFutureStackRouteProp = RouteProp<AppStackProps, 'AboutFuture'>;
export type OpportunitiesStackRouteProp = RouteProp<AppStackProps, 'Opportunities'>;
export type CultureStackRouteProp = RouteProp<AppStackProps, 'Culture'>;
export type OpportunityStackRouteProp = RouteProp<AppStackProps, 'Opportunity'>;
export type LoginStackRouteProp = RouteProp<AppStackProps, 'Opportunity'>;
