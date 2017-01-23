import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import App from './App'
import About from './components/About';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'


ReactDOM.render(
<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
      <Route path='todo' component={Main} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
		
 document.getElementById('container')
);