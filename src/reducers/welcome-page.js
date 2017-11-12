import {WELCOME_MESSAGE} from "../constants/reducer-types";

const INITIAL_STATE = {
    payload :{
        message1: 'please wait',
        message2: 'please wait',
        instructions: ''
    }

};

const welcomePage = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WELCOME_MESSAGE:
            return {payload : action.payload};
        default:
            return state;
    }
};

export default welcomePage;