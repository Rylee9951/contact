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
	update: function(e){
		var obj = this.state
		var id = e.target.id
		
		obj[id] = e.target.value	

		this.setState(obj)
	},

	createUser: function(){
		createContact(this.state)
		 hashHistory.push('/contacts/')
	},
	
render: function() {
    return (
      <div id="create">
      <div className="newContact"><h3>New Contact</h3></div>
      	<form>
					<input id="name" onChange ={this.update} type="text" name="name" placeholder="Jonh Doe"></input><br />
					<input id="email"onChange ={this.update} type="email" name="email" placeholder="Email@email.com"></input><br />
					<input id="cell"onChange ={this.update} type="tel" name="cell" placeholder="(555)-555-5555"></input><br />
					<input id="location"onChange ={this.update} type="text" name="location" placeholder="Street Address"></input><br />
					<button id="submit" onClick={this.createUser}>Submit</button>					
      	</form>
      </div>
    )
  }

})
  export default createUserContainer