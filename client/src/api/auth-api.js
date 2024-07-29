import requester from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await requester.post(`${baseUrl}/login`, { email, password });

    return authData;
}

export const register = (email, password) => requester.post(`${baseUrl}/register`, { email, password })