import React, { Component } from "react";
import User from "./User";
import UserForm from "./UserForm";
import banner from '../img/cover.jpg'

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
  
  return (
    <>
      <div class="card">
        <div id="edit" onClick={() => this.toggleEdit()}>
          Edit
        </div>
        <img id="coverImage" src={banner} alt="banner" />

        {this.state.editing ? (
          <UserForm toggleEdit={this.toggleEdit} />
        ) : (
          <User />
        )}
      </div>
    </>
  );}
}

export default UserProfile;