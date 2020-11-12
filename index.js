/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import AuthenticateScreen from './app/screens/authenticate/authenticate-screen';

AppRegistry.registerComponent(appName, () => AuthenticateScreen);
