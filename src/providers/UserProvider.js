import React from "react";
import profile from '../img/profile.png'
import banner from '../img/banner.jpg'

// Set Up The Initial Context
export const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: "SteveJenkins",
    firstName: 'Steve',
    lastName: 'Jenkins',
    email: 'steveJenkins@jenkins.com',
    profileImage: profile,
    coverImage: banner,
    dateJoined: "12/18/18",
    membershipLevel: "Silver",
    blerb: "I like stuff and things",
    updateUser: user => this.updateUser(user)
  };

  updateUser = user => {
    this.setState({ ...user });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
