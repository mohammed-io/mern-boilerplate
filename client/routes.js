import React from 'react';
import { Route } from 'react-router';


// global components
import AppIndex from './src/app/AppIndex';
import NotFound from './src/app/NotFound';


// auth components
import Login from './src/auth/Login';
import Register from './src/auth/Register';

// post components
import PostList from './src/posts/components/PostList';


export default (
  <Route path="/" component={AppIndex}>
    <Route path="posts" component={PostList} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="*" component={NotFound} />
  </Route>
);