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
  const [range, setRange] = useState([1, 30]);
  const [val, setVal] = useState(1);
  return (
    <CustomForm id={props.id} title="Define TIERS">
      <XFlex column>
        <XFlex>
          <div>
            <TypoText color="dark-100" marginBottom="small">
              Enable Retroactive Tiers?
            </TypoText>
            <TypoText size="small" color="dark-200" marginBottom="medium">
              Apply upper tier commission on all sales.
            </TypoText>
          </div>
          <Checkbox />
        </XFlex>
        <IGSInput label="Tier Name" />
        <IGSInput type="percent" label="Commission" />
        <XFlex column gap={60}>
          <div>
            <TypoText color="dark-100" marginBottom="small">
              Target USD
            </TypoText>
            <TypoText size="small" color="dark-200">
              Apply upper tier commission on all sales.
            </TypoText>
          </div>
          <RangeInput
            step={5}
            min={0}
            max={100}
            type="slider"
            sliderValue={val}
            onChange={(event): void => {
              setVal(event as number);
            }}
            color="primary"
            marks={{ 0: "0M", 25: "25M", 50: "50M", 75: "75M", 100: "100M" }}
          />
        </XFlex>
        <XFlex column gap={60}>
          <XFlex column gap={4}>
            <TypoText color="dark-100">Target Applicable</TypoText>
            <TypoText size="small" color="dark-200">
              Apply upper tier commission on all sales.
            </TypoText>
          </XFlex>
          <RangeInput
            min={1}
            max={30}
            type="range"
            rangeValues={range}
            onChange={(event): void => {
              setRange(event as number[]);
            }}
            color="primary"
            marks={{ 1: "1st", 5: "5th", 10: "10th", 15: "15th", 30: "30th" }}
          />
        </XFlex>
        <XFlex>
          <div></div>
          <Button text="Add Tier" variant="success" rounded />
        </XFlex>
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
      </XFlex>
    </CustomForm>
  );
};

export default ContractAddStepThree;
