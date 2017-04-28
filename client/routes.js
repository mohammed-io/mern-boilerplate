import React from 'react';
import { Route } from 'react-router-dom';


// global components
import AppIndex from './src/app/AppIndex';
import NotFound from './src/app/NotFound';


// post components
import Post from './src/posts/components/Post';
import PostList from './src/posts/components/PostList';


export default (
  <Route path="/" component={AppIndex}>
    <Route path="post" component={Post} />   
    <Route path="*" component={NotFound} />
  </Route>
);