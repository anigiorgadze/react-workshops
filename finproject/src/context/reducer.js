import { AUTHENTICATE, LOG_IN, LOG_OUT } from "./actions";
// import { jwtDecode } from "jwt-decode";

const initialState = {
    isAuthenticated: false,
    user: null
};

const reducer = (state, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case LOG_IN:
            const { token, user } = payload;
            localStorage.setItem("accessToken", token);
            localStorage.setItem("user", JSON.stringify(user));
            return { isAuthenticated: true, user };

        case AUTHENTICATE:
            return { isAuthenticated: true, user: payload.user };

        case LOG_OUT:
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            return { isAuthenticated: false, user: null };

        default:
            return state;
    }
};

export { initialState, reducer };
