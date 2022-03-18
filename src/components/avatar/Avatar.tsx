import React from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-identicon-sprites";

type AvatarProps = {
  className?: string;
};

const Avatar = ({ className }: AvatarProps): React.ReactElement => {
  const avatar = createAvatar(style, { dataUri: true });

  return <img className={className} src={avatar} alt="" />;
};

export default Avatar;
