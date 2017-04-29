import React from 'react';
import { Route } from 'react-router';


// global components
import AppIndex from './src/app/AppIndex';
import NotFound from './src/app/NotFound';


// auth components
import Login from './src/auth/Login';

// post components
import Post from './src/posts/components/Post';
import PostList from './src/posts/components/PostList';


export default (
  <Route path="/" component={AppIndex}>
    <Route path="post/:slug" component={Post} />
    <Route path="posts" component={PostList} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);