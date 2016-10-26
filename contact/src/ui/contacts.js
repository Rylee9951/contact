import React from 'react'
import { Link } from 'react-router'
import {getContacts, deleteContact} from 'api/contacts'



const ContactListContainer = React.createClass({
  getInitialState: function(){
   return{ 
    contacts: []
   }
  },
  componentWillMount: function () {
    this.rerender()
  },
  rerender: function(){
     getContacts().then(resp => {
        this.setState({
        contacts: resp.data
      })  
    })
   },
  render: function(){
    return (
        <ContactList rerender={this.rerender} contacts={this.state.contacts} />
      )
  }
      
})

const ContactList = React.createClass({
  deleteContact: function(e){
    var id = e.target.id.substr(1)

    deleteContact(id).then(resp => {
        this.props.rerender
    })
  },
  render: function (){
    return(
      <div id="page1">
          <div className="header">
            <h2>My Friends</h2>
          </div>
          <ul>
            <li>
              <Link to="/createContact/"><button id="add">Add Contact</button></Link>
            </li>
            {this.props.contacts.map(person => {
              return (
              <li key={person.id}>
                <Link to={`/contact/${person.id}`}>
                <img className="list" src={person.thumbnail}/>
                {person.name}</Link>
                <button id={`d${person.id}`} onClick= {this.deleteContact}>Delete</button>
              </li>
              )              
            })}
          </ul>
      </div>
    )
  }
})

export default ContactListContainer