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
    <div class='info'>
        <img id="profileImage" src={profileImage} alt="profile" />
        <div id="firstName">{firstName}</div>
        <div id="lastName">{lastName}</div>
        <div id="username">@{username}</div>
        <div id="bio">{blerb}</div>
    </div>
  );
};

export default User;
