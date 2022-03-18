import React from "react";
import Button from "../../../components/button/Button";
import IGSText from "../../../components/text/IGSText";

const GeneralInfo = (): React.ReactElement => {
  return (
    <div className="general-info">
      <div className="general-info__form">
        <div className="general-info__header">
          <IGSText type="heading-6">General Info</IGSText>
          <Button text="Edit" variant="primary" rounded />
        </div>

        <div>
          {/* TODO: Add Form here */}
          <h1>FORM</h1>
        </div>
      </div>
      <div className="general-info__empty" />
    </div>
  );
};

export default GeneralInfo;
