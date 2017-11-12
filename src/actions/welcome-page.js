import {WELCOME_MESSAGE} from "../constants/action-types";


export const welcomeMessage = () => {
    const welcomeMessage = {
        message1: 'Welcome to React Native!',
        message2: 'To get started, edit App.js',
        instructions: 'Double tap R on your keyboard to reload,\\n\' +\n' +
        '    \'Shake or press menu button for dev menu'
    };

    return (dispatch) => {
        dispatch({
            type: WELCOME_MESSAGE,
            payload : welcomeMessage
        })
    }
};
