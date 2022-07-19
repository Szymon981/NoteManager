import "./Popups.styles.css";
import { DataInputLabel } from "./DataInputLabel";

export const NoteAddInput = (props) => {
  return (
    <div className="data-input">
      <DataInputLabel title={props.title}></DataInputLabel>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};
