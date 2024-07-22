import * as request from '../api/requester'

const baseUrl = 'http://localhost:3030/jsonstore/games';
const create = async (gameId, username, text) => request.post(`${baseUrl}/${gameId}/comments`, {username, text})

const getAll = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}/comments`);
    
    const comments = Object.values(result);
    return comments;
}

export default {
    create,
    getAll
}