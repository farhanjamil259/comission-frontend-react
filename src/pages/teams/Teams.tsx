import React from "react";
import Card from "../../components/card/Card";
import CounterCard from "../Contracts/components/CounterCard";
import TeamImage from "../../assets/images/Team.png";
import IGSInput from "../../components/inputs/IGSInput";
import Button from "../../components/button/Button";
import TeamCard from "./components/TeamCard";

const Teams = (): React.ReactElement => {
  return (
    <div className="teams">
      <section className="teams__header">
        <Card radius="none">
          <div className="contracts-page-section--header-container">
            <CounterCard value="18" title="Teams" />
            <CounterCard value="12" title="Managers" />
            <CounterCard value="32" title="Sales Rep" />
            <CounterCard value="44" title="Employees" noBorder />

            <img className="teams__header-image" src={TeamImage} alt="" />
          </div>
        </Card>
      </section>

      <section className="teams__actions">
        <div className="teams__search-field">
          <IGSInput label="search" type="search" />
        </div>

        <div className="teams__action-button">
          <Button text="Create Team" variant="primary" />
        </div>
      </section>

      <section className="teams__cards">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </section>
    </div>
  );
};

export default Teams;
