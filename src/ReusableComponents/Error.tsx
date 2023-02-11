import { My_Prop_error } from "../models/props";

const Error = (props: My_Prop_error) => {
  return (
    <div>
      {props.status ? (
        <p style={{ color: "green" }}>{props.message}</p>
      ) : (
        <p style={{ color: "red" }}>{props.message}</p>
      )}
    </div>
  );
};

export default Error;
