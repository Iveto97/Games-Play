import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
   const result = await request.get(baseUrl);
   const games = Object.values(result);
   return games;
}

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

const gamesAPI = {
   getAll,
   getOne
}

export default gamesAPI;
