import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import Chart from "../components/chart/Chart";
import InputField from "../components/inputs/InputField";
import { State } from "../redux";
import { IData, loadDataAction } from "../redux/modules/data";

const store = [
  {
    _id: "",
    name: "",
    desc: "",
  },
  {
    _id: "",
    name: "",
    desc: "",
  },
  {
    _id: "",
    name: "",
    desc: "",
  },
  {
    _id: "",
    name: "",
    desc: "",
  },
];

const Home = (): React.ReactElement => {
  const dispatch = useDispatch();

  const reduxStateData = useSelector((state: State) => state.data);

  const [data, setData] = useState<IData>({
    name: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await dispatch(loadDataAction("", ""));
  };
  return (
    <div>
      <h1>Chart</h1>

      <Chart />

      <h1>HomePage</h1>
      <ul>
        {reduxStateData.data.map((d, i) => {
          return <li key={i + "datalist"}>{d.name}</li>;
        })}
      </ul>

      <form onSubmit={(e): Promise<void> => handleSubmit(e)}>
        <input
          type="text"
          value={data.name}
          onChange={(e): void =>
            setData((data) => {
              e.persist();
              const { value } = e.target;
              return {
                ...data,
                name: value,
              };
            })
          }
        />
        <button type="submit">Submit</button>
      </form>

      <InputField label="First Name" placeholder="John Doe" />

      <div>
        <Button variant="primary" text="Submit" />
        <Button variant="success" text="Submit" />
        <Button text="Submit" />
      </div>
      <div>
        <Button rounded variant="primary" text="Submit" />
        <Button rounded variant="success" text="Submit" />
      </div>
    </div>
  );
};

export default Home;
