import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/comments';
const create = ( gameId, text ) => request.post(baseUrl, {gameId, text})

const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`
    });

    return request.get(`${baseUrl}?${params.toString()}`);
};

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;