import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import App from './components/App';
import Article from './components/Article';
import Editor from './components/Editor';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Register from './components/Register';
import Settings from './components/Settings';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/editor" component={Editor} />
      <Route path="/editor/:slug" component={Editor} />
      <Route path="/article/:id" component={Article} />
      <Route path="/settings" component={Settings} />
      <Route path="/@:username" component={Profile} />
      <Route path="/@:username/favorites" component={ProfileFavorites} />
    </div>
    </Router>
  </Provider>
), document.getElementById('root'));
