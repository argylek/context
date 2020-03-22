import React from "react";
import { Form, Card } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    username: this.props.username,
    blerb: this.props.blerb,
    profileImage: this.props.profileImage,
    bannerImage: this.props.bannerImage,
    membershipLevel: this.props.membershipLevel
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    console.log(this.props.firstName)
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
      profileImage,
      bannerImage
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Card>
          <Card.Content>
            <Card.Header>
              <Form.Input
                label="First"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                required
              />
            </Card.Header>
            <Card.Header>
              <Form.Input
                label="Last"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                required
              />
            </Card.Header>
            <Card.Meta>
              {" "}
              <Form.Input
                label="Change Username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                required
              />
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            {" "}
            <Form.Input
              label="blerb"
              name="blerb"
              value={blerb}
              onChange={this.handleChange}
              type='text'
            />
          </Card.Content>
        </Card>

        <Form.Button color="green inverted">Save</Form.Button>
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
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  );
};

export default ConnectedUserForm;
