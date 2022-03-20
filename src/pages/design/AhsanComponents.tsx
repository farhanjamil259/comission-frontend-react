import React from "react";
import XFlex from "../../components/form/FormFlex";
import IGSInput from "../../components/inputs/IGSInput";
import RangeInput from "../../components/inputs/RangeInput";
import SelectInput, {
  SelectOptions,
} from "../../components/inputs/SelectInput";
import Wizard from "../../components/wizards/Wizard";
import CommisionCalculator, {
  CalcCard,
} from "../comissionCalculator/CommisionCalculator";
import EmployeeAddStepOne from "../EmployeeDashboard/components/employeeAdd/EmployeeAddStepTwo";

const AhsanComponents = (): React.ReactElement => {
  const cardData: CalcCard[] = [
    {
      title: "Sale",
      lead: "70,000,000",
      type: "sale",
      applied: true,
    },
    {
      title: "Commission Criteria",
      type: "comcriteria",
      data: [
        { heading: "Base Commission", data: "5%" },
        { heading: "Commission Metric", data: "Percentage" },
        { heading: "Sale Mode", data: "Gross Sale" },
        { heading: "Commission Against", data: "Per Sale" },
      ],
    },
    {
      title: "Tier 1",
      type: "tier",
      data: [
        { heading: "Target", data: "25,000,000" },
        { heading: "Commission", data: "5%" },
        { heading: "Retroactive", data: "Yes" },
      ],
    },
    {
      title: "Tier 2",
      type: "tier",
      applied: true,
      data: [
        { heading: "Target", data: "50,000,000" },
        { heading: "Commission", data: "7%" },
        { heading: "Retroactive", data: "Yes" },
      ],
    },
    {
      title: "Commission",
      type: "result",
      applied: true,
      lead: "500,000",
    },
    {
      title: "Accelerator 1",
      type: "accelerator",
      applied: true,
      data: [
        { heading: "Target", data: "50,000,000" },
        { heading: "Commission", data: "+1%" },
        { heading: "Duration", data: "5th - 15th" },
      ],
    },
    {
      title: "Accelerator 2",
      type: "accelerator",
      data: [
        { heading: "Target", data: "75,000,000" },
        { heading: "Commission", data: "+2%" },
        { heading: "Duration", data: "5th - 15th" },
      ],
    },
    {
      title: "Commission",
      type: "result",
      applied: true,
      lead: "600,000",
    },
    {
      title: "Decelerator 1",
      type: "decelerator",
      data: [
        { heading: "Allowed Discount", data: "$250" },
        { heading: "Target Missed (Per Month)", data: "25,000,000" },
        { heading: "Commission", data: "-2%" },
        { heading: "Season", data: "AG,SP,OC,NV,DC" },
      ],
    },
    {
      title: "Commission",
      type: "result",
      applied: true,
      lead: "600,000",
    },
    {
      title: "Draw/Salary",
      type: "salary",
      data: [
        { heading: "Mode", data: "Draw" },
        { heading: "Recoverable", data: "No" },
        { heading: "Amount", data: "50,000" },
      ],
    },
    {
      title: "Earning",
      type: "result",
      applied: true,
      lead: "650,000",
    },
    {
      title: "Bonus Criteria",
      type: "bonus",
      applied: true,
      data: [
        { heading: "Type", data: "Monthly" },
        { heading: "Target", data: "50,000,000" },
        { heading: "Amount", data: "+5,000" },
      ],
    },
    {
      title: "Bonus Criteria",
      type: "bonus",
      data: [
        { heading: "Type", data: "Quarterly" },
        { heading: "Target", data: "150,000,000" },
        { heading: "Amount", data: "+15,000" },
      ],
    },
    {
      title: "Bonus Criteria",
      type: "bonus",
      data: [
        { heading: "Type", data: "Yearly" },
        { heading: "Target", data: "1,000,000,000" },
        { heading: "Amount", data: "+150,000" },
      ],
    },
    {
      title: "Earning",
      type: "result",
      applied: true,
      lead: "655,000",
    },

    {
      title: "Recoverable Draw",
      type: "drawrecovery",
      applied: true,
      data: [{ heading: "Draw Amount", data: "500,000" }],
    },
    {
      title: "Earning",
      type: "result",
      applied: true,
      lead: "655,000",
    },
    {
      title: "Reserve Account",
      type: "reserve",
      applied: true,
      data: [
        { heading: "Account Limit", data: "500,000" },
        { heading: "Balance", data: "400,000" },
        { heading: "Deficiency Margin", data: "20%" },
        { heading: "Deficiency", data: "100,000" },
      ],
    },
    {
      title: "Earning",
      type: "result",
      applied: true,
      lead: "555,000",
    },
    {
      title: "Clawback",
      type: "clawback",
      applied: true,
      data: [
        { heading: "Service Duration", data: "6 Months" },
        { heading: "Clawback Margin", data: "50%" },
        { heading: "Total Sale Return", data: "1,000,000" },
        { heading: "Clawback Amount", data: "50,000" },
      ],
    },
    {
      title: "Payable",
      type: "payout",
      applied: true,
      lead: "505,000",
    },
  ];

  return (
    <div>
      <CommisionCalculator cards={cardData} />
    </div>
  );
};

export default AhsanComponents;
