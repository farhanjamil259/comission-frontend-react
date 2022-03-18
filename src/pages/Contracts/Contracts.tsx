import React, { useState } from "react";
import Card from "../../components/card/Card";
import CalenderImage from "../../assets/images/Calender.png";
import CounterCard from "./components/CounterCard";
import IGSInput from "../../components/inputs/IGSInput";
import Button from "../../components/button/Button";
import Contract from "./components/ContractCard";
import Wizard from "../../components/wizards/Wizard";
import ContractAddStepOne from "./components/contractAdd/ContractAddStepOne";
import ContractAddStepTwo from "./components/contractAdd/ContractAddStepTwo";
import ContractAddStepThree from "./components/contractAdd/ContractAddStepThree";
import ContractAddStepFour from "./components/contractAdd/ContractAddStepFour";
import ContractAddStepFive from "./components/contractAdd/ContractAddStepFive";
import ContractAddStepSix from "./components/contractAdd/ContractAddStepSix";
import ContractAddStepEight from "./components/contractAdd/ContractAddStepEight";
import ContractAddStepSeven from "./components/contractAdd/ContractAddStepSeven";

const Contracts = (): React.ReactElement => {
  const [showWiz, setShowWiz] = useState(false);
  return (
    <div className="contracts-page">
      <div className="contracts-page-section--header">
        <Card radius="none">
          <div className="contracts-page-section--header-container">
            <CounterCard value="120" title="Total Projects" />
            <CounterCard value="120" title="Total Projects" />
            <CounterCard value="120" title="Total Projects" />
            <CounterCard value="120" title="Total Projects" noBorder />

            <img
              className="contracts-page-section--header-container-image"
              src={CalenderImage}
              alt=""
            />
          </div>
        </Card>
      </div>
      <div className="contracts-page-section--actions">
        <div className="contracts-page-section--actions-left">
          <IGSInput placeholder="Search" type="search" />
        </div>
        <Button
          text="Create Contract"
          variant="primary"
          onClick={(): void => setShowWiz(true)}
        />
      </div>

      <div className="contracts-page-section--contracts">
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
      </div>

      <Wizard
        title="New Contract"
        onCancel={(): void => setShowWiz(false)}
        show={showWiz}
        onSubmit={(): void => setShowWiz(false)}
      >
        <ContractAddStepOne id="contract-add-step-1" />
        <ContractAddStepTwo id="contract-add-step-2" />
        <ContractAddStepThree id="contract-add-step-3" />
        <ContractAddStepFour id="contract-add-step-4" />
        <ContractAddStepFive id="contract-add-step-5" />
        <ContractAddStepSix id="contract-add-step-6" />
        <ContractAddStepSeven id="contract-add-step-7" />
        <ContractAddStepEight id="contract-add-step-8" />
      </Wizard>
    </div>
  );
};

export default Contracts;
