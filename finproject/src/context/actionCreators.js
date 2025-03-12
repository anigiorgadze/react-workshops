import { AUTHENTICATE, LOG_IN } from "./actions";

const LogInAction = (data) =>{
    return {type: LOG_IN, payload:data};
};

const authenticateAction = (token) =>{
    return {
        type:AUTHENTICATE,
        payload:token,
    }
}


export {LogInAction, authenticateAction}