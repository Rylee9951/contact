import React from 'react'
import { Link, hashHistory } from 'react-router'
import {getContact} from 'api/contacts'


const createUserContainer = React.createClass({
	getInitialState: function(){
		return {
			"name":"",
			"email":"",
			"cell":"",
			"location":""
		}
	},
	update:function(e){
		var val = e.target.value
		var id = e.target.id
		var statObj={}
		var stateObj{id} = val

		this.setState(stateObj)
	},

	createUser: function(e){
		e.preventDefault()
		createContact(this.state)
		hashHistory.push('/contacts/')
	},
	
render: function() {
    return (
      <div id="create">
      <div className="newContact">New Contact</div>
      	<form onSubmit={this.createUser}>
					<input onChange ={this.update} type="text" name="name" placeholder="Jonh Doe"></input>
					<input onChange ={this.update} type="email" name="email" placeholder="Email@email.com"></input>
					<input onChange ={this.update} type="tel" name="cell" placeholder="(555)-555-5555"></input>
					<input onChange ={this.update} type="text" name="location" placeholder="Street Address"></input>
					<button>Submit</button>
      	</form>
      </div>
    )
  }

})
  export default createUserContainer