import "./Popups.styles.css";
import { DataInputLabel } from "./DataInputLabel";

export const DataInsert = (InsertComponent) => (props) => {
  return (
    <div className="data-input">
      <DataInputLabel title={props.title}></DataInputLabel>
      <InsertComponent {...props}></InsertComponent>
    </div>
  );
};
