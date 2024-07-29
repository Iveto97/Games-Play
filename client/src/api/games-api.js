import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = async () => {
   const result = await request.get(baseUrl);
   const games = Object.values(result);
   return games;
}

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (gameData) => request.post(`${baseUrl}`, gameData);

const gamesAPI = {
   getAll,
   getOne,
   create
}

export default gamesAPI;
