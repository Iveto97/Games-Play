import * as request from './requester';

const baseUrl = 'http://localehost:3030/jsonstore/games';

export const getAll = async () => request.get(baseUrl)