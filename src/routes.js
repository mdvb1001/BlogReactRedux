import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Route is used to match a url route and a react component


import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
      {/*IndexRoute doesn't need a path because it has the default path*/}
    <Route path="posts/new" component={PostsNew} />
  </Route>
);