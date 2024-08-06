import { List, ListItem } from '@mui/material';
import { Post } from 'entities/post';
import { useEffect } from 'react';
import { getDevices } from 'shared/api/devices';
import classes from './PostList.module.css';
import { selectPosts, setPosts } from '../model/postsList';
import { useAppDispatch, useAppSelector } from 'shared/store/hooks';
import { selectIsLogin } from 'pages/login/model/login';
import { SearchForm } from 'features/search';
import { getDeviceById } from 'shared/api/devices/devices';
import { useSearch } from 'features/search/lib/useSearch';

export const PostList = () => {
    const posts = useAppSelector(selectPosts);
    const isAuth = useAppSelector(selectIsLogin);
    const dispatch = useAppDispatch();
    const { handleSearch, filter, isLoading, data } = useSearch(getDeviceById, getDevices, /^\d{1}$/, 'Строка поиска должна содержать только одну цифру!');

    async function fetchDevices() {
        try {
            const devices = await getDevices();

            dispatch(setPosts(devices));
        } catch (error) {
            console.error('Error fetching devices:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchDevices();
    }, []);

    useEffect(() => {
        dispatch(setPosts(data));
    }, [filter, data, dispatch]);

    return (
        <>
            {!isAuth ? (
                <h2>Сначала нужно выполнить вход!!!</h2>
            ) : (
                <div>
                    <SearchForm handleSearch={handleSearch} />
                    <List className={classes['post-list']}>
                        {isLoading || (!posts.length && !filter) ? (
                            <h1>Loading...</h1>
                        ) : (
                            posts.length ? (
                                posts.map((post, index) => (
                                    <ListItem
                                        key={index}
                                        disablePadding
                                        sx={{
                                            maxWidth: "270px",
                                            padding: '16px',
                                            display: 'flex',
                                            gap: '8px',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',
                                            height: 'max-content',
                                        }}
                                    >
                                        <Post post={post} />
                                    </ListItem>
                                ))
                            ) : (
                                <h1>{filter ? 'Ничего не нашел (˘･_･˘)' : ''}</h1>
                            )
                        )}
                    </List>
                </div>
            )}
        </>
    );
};
