import React, {Component } from "react";
import { Form, Card, Button } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";


class UserForm extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    username: this.props.username,
    blerb: this.props.blerb,
    profileImage: this.props.profileImage,
    bannerImage: this.props.bannerImage
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    console.log(this.props.firstName);
    console.log(this.props.lastName);
    e.preventDefault();
    this.props.updateUser({ ...this.state });
    this.props.toggleEdit();
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      blerb,
      // profileImage,
      // bannerImage
    } = this.state;
    return (

      <Form className="form" onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                id="first"
                type="text"
                name="firstName"
                placeholder="first"
                value={firstName}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                fluid
                id="last"
                type="text"
                name="lastName"
                placeholder="Last"
                value={lastName}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                fluid
                id='user'
                placeholder="Change Username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                required
              />
            <Form.Input
            fluid
              placeholder="blerb"
              id='blerb'
              name="blerb"
              value={blerb}
              onChange={this.handleChange}
              type="text"
              />
        <Button type="submit" color="green inverted">Save</Button>
        </Form>
    );
  }
}

const ConnectedUserForm = props => {
  return (
    <UserConsumer>
      {value => (
        <UserForm
          {...props}
          firstName={value.firstName}
          lastName={value.lastName}
          blerb={value.blerb}
          profileImage={value.profileImage}
          bannerImage={value.bannerImage}
          username={value.username}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  );
}




export default ConnectedUserForm;
