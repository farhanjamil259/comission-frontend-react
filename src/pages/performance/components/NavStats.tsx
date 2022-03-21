import React from "react";
import RangeInput from "../../../components/inputs/RangeInput";
import IGSText from "../../../components/text/IGSText";

const NavStats = (): React.ReactElement => {
  return (
    <div className="nav-stats">
      <IGSText type="body-2">Commishd Status</IGSText>

      <div className="nav-stats__ranges">
        <div className="nav-stats__range--label">
          <IGSText type="stylize-small" className="nav-stats__range--text">
            Reserve Account
          </IGSText>
          <IGSText type="stylize-small" className="nav-stats__range--rate">
            86%
          </IGSText>
        </div>
        <RangeInput type="slider" noHandle sliderValue={80} color="primary" />
        <div className="nav-stats__range--sub">
          <IGSText type="stylize-small" className="nav-stats__range--amount">
            $500,000
          </IGSText>
        </div>
      </div>

      <div className="nav-stats__ranges">
        <div className="nav-stats__range--label">
          <IGSText type="stylize-small" className="nav-stats__range--text">
            Reserve Account
          </IGSText>
          <IGSText type="stylize-small" className="nav-stats__range--rate">
            86%
          </IGSText>
        </div>
        <RangeInput type="slider" noHandle sliderValue={80} color="danger" />
        <div className="nav-stats__range--sub">
          <IGSText type="stylize-small" className="nav-stats__range--amount">
            $500,000
          </IGSText>
        </div>
      </div>
      <div className="nav-stats__ranges">
        <div className="nav-stats__range--label">
          <IGSText type="stylize-small" className="nav-stats__range--text">
            Reserve Account
          </IGSText>
          <IGSText type="stylize-small" className="nav-stats__range--rate">
            86%
          </IGSText>
        </div>
        <RangeInput type="slider" noHandle sliderValue={80} color="success" />
        <div className="nav-stats__range--sub">
          <IGSText type="stylize-small" className="nav-stats__range--amount">
            $500,000
          </IGSText>
        </div>
      </div>
      <div className="nav-stats__ranges">
        <div className="nav-stats__range--label">
          <IGSText type="stylize-small" className="nav-stats__range--text">
            Reserve Account
          </IGSText>
          <IGSText type="stylize-small" className="nav-stats__range--rate">
            86%
          </IGSText>
        </div>
        <RangeInput type="slider" noHandle sliderValue={80} color="primary" />
        <div className="nav-stats__range--sub">
          <IGSText type="stylize-small" className="nav-stats__range--amount">
            $500,000
          </IGSText>
        </div>
      </div>
    </div>
  );
};

export default NavStats;
