import React, { Component } from "react";
import User from "./User";
import UserForm from "./UserForm";
import { Button } from 'semantic-ui-react'

class UserProfile extends Component {
  state = {
    editing: false
  }
  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

render(){
  
  return <>
  <Button color='blue' onClick={() => this.toggleEdit()}>Edit</Button>
  {this.state.editing ? <UserForm toggleEdit={this.toggleEdit}/> : <User />}</>;}
}

export default UserProfile;