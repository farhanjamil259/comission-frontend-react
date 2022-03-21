import React from "react";
import Avatar from "../../../components/avatar/Avatar";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import IGSText from "../../../components/text/IGSText";

const TeamCard = (): React.ReactElement => {
  return (
    <Card>
      <div className="team-card">
        <Avatar className="team-card__avatar" />
        <IGSText type="stylize-small" className="team-card__team-name">
          TEAM BRAVO
        </IGSText>

        <div className="team-card__info">
          <div>
            <IGSText type="stylize-small" className="team-card__info--label">
              Sales Rep
            </IGSText>
            <IGSText type="stylize-small" className="team-card__info--value">
              04
            </IGSText>
          </div>
          <div>
            <IGSText type="stylize-small" className="team-card__info--label">
              Manager
            </IGSText>
            <IGSText type="stylize-small" className="team-card__info--value">
              Jimmy H.
            </IGSText>
          </div>
        </div>

        <div className="team-card__members">
          <Avatar className="team-card__member" />
          <Avatar className="team-card__member" />
          <Avatar className="team-card__member" />
          <Avatar className="team-card__member" />
        </div>

        <Button text="Show Details" variant="dark" />
      </div>
    </Card>
  );
};

export default TeamCard;
