import "./Popups.styles.css";
import { DataInputLabel } from "./DataInputLabel";

export const DataInsert =
  (InsertComponent) =>
  ({ title, value, handleChange }) => {
    return (
      <div className="data-input">
        <DataInputLabel title={title}></DataInputLabel>
        <InsertComponent
          value={value}
          handleChange={handleChange}
        ></InsertComponent>
      </div>
    );
  };
