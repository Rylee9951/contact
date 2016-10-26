import React from 'react'
import { Link } from 'react-router'
import {getContact} from 'api/contacts'

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

        getContact(id).then(resp => {
           this.setState({
           name: resp.data.name,
           email: resp.data.email,
           cell: resp.data.cell,
           location:resp.data.location
          })
        })
   
  },

  
  render: function() {
    return (
      <div id="info">
        <div className="photo"><h1>My Photo</h1></div>
      	<ul>
					<li>{this.state.name}</li>
					<li>{this.state.email}</li>
					<li>{this.state.cell}</li>
					<li>{this.state.location}</li>
      	</ul>
      </div>
    )
  }
})


