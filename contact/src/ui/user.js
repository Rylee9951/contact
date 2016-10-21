import React from 'react';
import { Link } from 'react-router';

import People from 'data/people.json'

export default React.createClass({
  getInitialState: function() {
    return {
      name:'',
      email:'',
      cell:'',
      location:''
    }
  },
  componentWillMount: function () {
    var id = this.props.params.id;

    var person = People.users.filter(function(person){
      return person.id == id
    })[0]

   

    this.setState({
      name: person.name,
      email: person.email,
      cell: person.cell,
      location:person.location
    })
  },
  render: function() {
    return (
      <div>
      	<ul>
					<li>{this.state.name}</li>
					<li>{this.state.email}</li>
					<li>{this.state.cell}</li>
					<li>{this.state.location}</li>
      	</ul>
      </div>
    )
  }
});