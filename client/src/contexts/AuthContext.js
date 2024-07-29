import { createContext } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    inAuthenticated: false,
    changeAuthState: (authState = {}) => null,
}) ;