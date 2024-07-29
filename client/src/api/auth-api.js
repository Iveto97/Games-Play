import requester from "./requester";

const baseUrl = 'http://localhost:3030/users';

export default login = async (email, password) => {
    const authData = await requester.post(`${baseUrl}/login`, { email, password });

    return authData;
}