import { FC } from 'react';
import classes from './Post.module.css';

interface Props {
    post: any;
}

export const Post: FC<Props> = ({ post }) => {
    return (
        <div className={classes.post}>
            <div>
                <h2>ID: </h2>
                <span>{post.id}</span>
            </div>
            <div>
                <h2>Название: </h2>
                <span>{post.name}</span>
            </div>
            <div>
                <h2>Уникальный ID: </h2>
                <span>{post.uniqueId}</span>
            </div>
            <div>
                <h2>Статус: </h2>
                <span>{post.status}</span>
            </div>
            <div>
                <h2>Дата последнего обновления:</h2>
                <span>{post.lastUpdate}</span>
            </div>
        </div>
    );
};
