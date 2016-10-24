import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';
// Contacts
import Contacts from 'ui/contacts';
// Contact
import User from 'ui/user';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Contacts}/>
      <Route path="/contact/:id" component={User}/>
    </Route>
  </Router>
), document.getElementById('app'));