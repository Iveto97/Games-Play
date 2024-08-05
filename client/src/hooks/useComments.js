import { useSearchParams } from 'react-router-dom';
import commentsAPI from '../api/comments-api';
import { useEffect, useState } from 'react';

export function useCreateComment() {
    const createHandler = (gameId, comment) => commentsAPI.create(gameId, comment)

    return createHandler;
};

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
                const result = await commentsAPI.getAll(gameId);
                
                setComments(result);
            })();
    }, [gameId]);
    return [comments, setComments];
}