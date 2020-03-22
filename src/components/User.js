import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {
  const {
    lastName,
    firstName,
    username,
    blerb,
    profileImage,
    bannerImage
  } = useContext(UserContext);

  return (
    <Card>
      <Image src={bannerImage} />

      <Card.Content>
        <Card.Header>
          <Image src={profileImage} avatar />
          {firstName} {lastName}
        </Card.Header>
        <Card.Meta>@ {username}</Card.Meta>
      </Card.Content>
      <Card.Content>{blerb}</Card.Content>
    </Card>
  );
};
export default User;
