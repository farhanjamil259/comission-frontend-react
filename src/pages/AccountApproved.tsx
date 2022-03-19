import React from "react";
import Card from "../components/card/Card";
import IMAGE from "../assets/images/AccountApproved.png";
import IGSText from "../components/text/IGSText";
import Button from "../components/button/Button";

const AccountApproved = (): React.ReactElement => {
  return (
    <div className="account-approved">
      <div className="account-approved__card">
        <Card>
          <div className="account-approved__content">
            <img src={IMAGE} alt="" />
            <IGSText className="account-approved__label" type="stylize-lead">
              ACCOUNT VERIFIED
            </IGSText>
            <IGSText className="account-approved__subtext" type="stylize-small">
              There are a lot of tasks popping out every day and we feel the
              team is getting a bit overwhelmed. We`d love to have you board.
            </IGSText>

            <Button rounded variant="success" text="Dashboard" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AccountApproved;
