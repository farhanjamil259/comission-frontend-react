import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import Card from "../../../../components/card/Card";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import RangeInput from "../../../../components/inputs/RangeInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepThree = (props: CustomFormProps): React.ReactElement => {
  const [range, setRange] = useState([1, 15]);
  const [range2, setRange2] = useState([1, 25]);
  return (
    <CustomForm id={props.id} title="Define TIERS">
      <Checkbox
        formColumn
        label=" Enable Retroactive Tiers?"
        description=" Apply upper tier commission on all sales."
      />
      <IGSInput label="Tier Name" />
      <IGSInput type="percent" label="Commission" />
      <RangeInput
        label="SALE TARGET"
        step={5}
        min={0}
        max={100}
        type="range"
        rangeValues={range2}
        onChange={(event): void => {
          setRange2(event as number[]);
        }}
        color="primary"
        marks={{ 0: "0M", 25: "25M", 50: "50M", 75: "75M", 100: "100M" }}
      />
      <RangeInput
        label="MONTH DAYS"
        min={1}
        max={30}
        type="range"
        rangeValues={range}
        onChange={(event): void => {
          setRange(event as number[]);
        }}
        color="primary"
        marks={{
          1: "1st",
          5: "5th",
          10: "10th",
          15: "15th",
          20: "20th",
          25: "25th",
          30: "30th",
        }}
      />
      {/* <Button text="Add Tier" variant="success" rounded /> */}
      {/* <Card border>
        <XFlex>
          <div>
            <TypoText size="small" color="dark-200" marginBottom="small">
              Tier
            </TypoText>
            <TypoText color="dark-100">Alpine</TypoText>
          </div>
          <div>
            <TypoText size="small" color="dark-200" marginBottom="small">
              Commission
            </TypoText>
            <TypoText color="dark-100">5%</TypoText>
          </div>
        </XFlex>
        <br></br>
        <div>
          <TypoText size="small" color="dark-200" marginBottom="small">
            Target USD
          </TypoText>
          <RangeInput
            noHandle
            small
            type="slider"
            min={1}
            max={100}
            sliderValue={val}
            color="primary"
            marks={{ [val]: `$${val}M` }}
          />
        </div>

        <div>
          <TypoText size="small" color="dark-200" marginBottom="small">
            Tier Applicable [Month Day]
          </TypoText>
          <RangeInput
            noHandle
            small
            type="range"
            min={1}
            max={30}
            step={5}
            rangeValues={range}
            color="primary"
            marks={{
              [range[0]]: `${range[0]}th`,
              [range[1]]: `${range[1]}th`,
            }}
          />
        </div>
      </Card> */}
    </CustomForm>
  );
};

export default ContractAddStepThree;
