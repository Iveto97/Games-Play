import { createContext } from "react";

export const AuthContext = createContext({
    email: '',
    accessToken: '',
    inAuthenticated: false,
    changeAuthState: (authState = {}) => null,
}) ;