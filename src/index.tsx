import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from '../src/pages/error';
import PostListPage from '../src/pages/post-list';
import PostPage from '../src/pages/post';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/post/:postId",
                element: <PostPage />
            },
            {
                path: "/post-list",
                element: <PostListPage />,
            }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);


