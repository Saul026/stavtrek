import { createBrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { LoginPage } from 'pages/login';
import { Main } from 'pages/main';
import { PostList } from 'widgets/postList';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LoginPage />,
            },
            {
                path: '/devices',
                element: (
                    <Main>
                        <PostList />
                    </Main>
                ),
            },
            {
                path: '/home',
                element: (
                    <Main>
                        <h2>Home</h2>
                    </Main>
                ),
            },
        ],
    },
]);
