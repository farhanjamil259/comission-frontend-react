import React from "react";
import Avatar from "../avatar/Avatar";
import IGSIcon from "../icon/IGSIcon";

type ProfilePictureInputProps = {
  onClick?: () => void;
};

const ProfilePictureInput = (
  props: ProfilePictureInputProps
): React.ReactElement => {
  return (
    <div className="profile-pic" onClick={props.onClick}>
      <Avatar className="profile-pic__image" />
      <IGSIcon className="profile-pic__button" type="add" />
    </div>
  );
};

export default ProfilePictureInput;
