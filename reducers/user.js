import { DEFAULT_STATE, GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import { AsyncStorage } from 'react-native';


const user = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            console.log('SIGN_IN reducer dispatched');
            return signUserIn(state, action);
        case 'SIGN_OUT':
            console.log('SIGN_OUT reducer dispatched');
            return signUserOut(state, action);
        case 'UPDATE_PROFILE':
            console.log('UPDATE_PROFILE reducer dispatched');
            return updateProfile(state, action);
        default:
            return state;
    }
}

const updateProfile = (state, action) => {
    const newState = Object.assign({}, state);
    if(action.username) newState.username = action.username;
    if(action.title) newState.title = action.title;
    if(action.totalElevation) newState.totalElevation = action.totalElevation;
    return newState;
}

const signUserIn = (state, action) => {
    const newState = Object.assign({}, state);
    newState.userId = action.userId;
    return newState;
}

const signUserOut = async (state, action) => {
    await AsyncStorage.removeItem(GC_USER_ID)
    await AsyncStorage.removeItem(GC_AUTH_TOKEN)
    return Object.assign({}, state).userId = null;
}

export default user;