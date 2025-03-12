import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { authenticateAction } from './actionCreators';

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const user = localStorage.getItem("user");

        if (token && user) {
            console.log("🔄 Restoring AuthContext state...");
            try {
                dispatch(authenticateAction({ token, user: JSON.parse(user) }));
            } catch (error) {
                console.error("❌ Error parsing user JSON:", error);
                localStorage.removeItem("user"); // წაშლის არასწორ JSON მონაცემს
            }
        }
    }, []);

    return (
        <authContext.Provider value={{ state, dispatch }}>
            {children}
        </authContext.Provider>
    );
};

const useAuthContext = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("Auth context is not working");
    }
    return context;
};

export { AuthContextProvider, useAuthContext };
