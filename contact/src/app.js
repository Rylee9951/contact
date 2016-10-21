import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';
// Contacts
import contacts from 'ui/contacts';
// Contact
import contact from 'ui/contact';
// People
import people from 'data/people';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route component={contacts}/>
      <Route component={contact}/>
    </Route>
  </Router>
), document.getElementById('app'));