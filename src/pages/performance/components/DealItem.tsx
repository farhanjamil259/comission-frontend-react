import React from "react";
import IGSText from "../../../components/text/IGSText";

const DealItem = (): React.ReactElement => {
  return (
    <div className="deal-item">
      <IGSText type="stylize-tiny" className="deal-item__status">
        ACTIVE
      </IGSText>

      <IGSText type="stylize-lead" className="deal-item__label">
        <span className="deal-item__id">#118</span> Storm Fiber Sales Contract
      </IGSText>

      <div className="deal-item__info">
        <div>
          <IGSText className="deal-item__info--label" type="stylize-small">
            asdasd
          </IGSText>
          <IGSText className="deal-item__info--value" type="stylize-small">
            asdasd
          </IGSText>
        </div>
        <div>
          <IGSText className="deal-item__info--label" type="stylize-small">
            asdasd
          </IGSText>
          <IGSText className="deal-item__info--value" type="stylize-small">
            asdasd
          </IGSText>
        </div>
        <div>
          <IGSText className="deal-item__info--label" type="stylize-small">
            asdasd
          </IGSText>
          <IGSText className="deal-item__info--value" type="stylize-small">
            asdasd
          </IGSText>
        </div>
      </div>
    </div>
  );
};

export default DealItem;
