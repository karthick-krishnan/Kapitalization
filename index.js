import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/store'
import RouterComponent from './src/router';

const store = configureStore()

const Kapitalization = () => (
    <Provider store={store}>
        <RouterComponent />
    </Provider>
)

AppRegistry.registerComponent('Kapitalization', () => Kapitalization);

