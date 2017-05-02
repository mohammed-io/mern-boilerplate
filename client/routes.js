import React from 'react';
import { Route, IndexRoute } from 'react-router';


// global components
import AppIndex from './src/app/AppIndex';
import Home from './src/app/Home';
import NotFound from './src/app/NotFound';


// auth components
import Login from './src/auth/Login';
import Register from './src/auth/Register';

// post components
import PostList from './src/posts/components/PostList';
import SinglePost from './src/posts/components/SinglePost';


export default (
  <Route path="/" component={AppIndex}>
    <IndexRoute component={Home} />
    <Route path="posts" component={PostList} />
    <Route path="posts/:slug" component={SinglePost} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="*" component={NotFound} />
  </Route>
);