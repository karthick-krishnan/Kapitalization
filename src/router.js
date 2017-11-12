import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import welcomePage from './components/welcome-page';


class  RouterComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }}>
                <Scene key="initial">
                    <Scene key='welcomePage' component={welcomePage} title='Welcome Page' />
                </Scene>
            </Router>
        );
    }
};

export default RouterComponent;
