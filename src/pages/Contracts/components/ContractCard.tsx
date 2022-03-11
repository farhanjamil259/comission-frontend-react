import React from "react";
import Card from "../../../components/card/Card";
import IGSText from "../../../components/text/IGSText";

const Contract = (): React.ReactElement => {
  return (
    <Card radius="half">
      <div className="contract-card">
        <div className="contract-card__header">
          <IGSText className="contract-card__id" type="stylize-lead">
            <IGSText className="contract-card__label" type="stylize-lead">
              #182
            </IGSText>
            Storm Fiber Sales Contract
          </IGSText>

          <IGSText className="contract-card__status" type="stylize-tiny">
            IN PROGRESS
          </IGSText>
        </div>

        <div className="contract-card__info">
          <div className="contract-card__stat">
            {/* TODO: use map to generate */}
            <IGSText
              className="contract-card__stat--label"
              type="stylize-small"
            >
              PRODUCT
            </IGSText>
            <IGSText
              className="contract-card__stat--value"
              type="stylize-small"
            >
              Service
            </IGSText>
          </div>
          <div className="contract-card__stat">
            <IGSText
              className="contract-card__stat--label"
              type="stylize-small"
            >
              SALES REPS
            </IGSText>
            <IGSText
              className="contract-card__stat--value"
              type="stylize-small"
            >
              Service
            </IGSText>
          </div>
          <div className="contract-card__stat">
            <IGSText
              className="contract-card__stat--label"
              type="stylize-small"
            >
              VALID THRU
            </IGSText>
            <IGSText
              className="contract-card__stat--value"
              type="stylize-small"
            >
              June 05, 2022
            </IGSText>
          </div>
          <div className="contract-card__stat">
            <IGSText
              className="contract-card__stat--label"
              type="stylize-small"
            >
              REVENUE
            </IGSText>
            <IGSText
              className="contract-card__stat--value"
              type="stylize-small"
            >
              $115,000.00
            </IGSText>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Contract;
