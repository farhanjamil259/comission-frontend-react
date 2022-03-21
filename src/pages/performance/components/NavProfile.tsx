import React from "react";
import Avatar from "../../../components/avatar/Avatar";
import IGSText from "../../../components/text/IGSText";

const NavProfile = (): React.ReactElement => {
  return (
    <div className="nav-profile">
      <Avatar className="nav-profile__avatar" />
      <div>
        <IGSText className="nav-profile--label" type="heading-6">
          Courtney Wilson
        </IGSText>
        <IGSText className="nav-profile--sub" type="body-2">
          Sales Rep
        </IGSText>
      </div>
    </div>
  );
};

export default NavProfile;
