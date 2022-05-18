import React, {useEffect, useState} from 'react'
import './assets/scss/style.scss'
import {Route, Routes} from 'react-router-dom';
import SharedLayout from "./layouts/SharedLayout";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/DashboardPage";
import TodosPage from "./pages/TodosPage";

function App() {

    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='/users' element={<UsersPage />} />
                        <Route path='/posts' element={<PostsPage />} />
                        <Route path='/todos' element={<TodosPage />} />
                        <Route
                            path='/posts/:postId'
                            element={<SinglePostPage />}
                        />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                    // Nested routes
                    <Route path='/dashboard' element={<DashboardPage />}>
                        <Route path='stats' element={<div>stats</div>} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
