import React from 'react';
import { Link } from 'react-router';

import People from 'data/people.json'

export default React.createClass({
  render: function() {
    return (
      <div id="page1">
      	<div className="header">
      	<h2>My Friends</h2>
      	</div>
      	<ul>
      		{People.users.map(function(person) {
      			return (
  					<li key={person.id}>
  						<Link to={"/user/" + person.id}>{person.name}</Link>
  					</li>
      			)
      		})}
      	</ul>
      </div>
    )
  }
});