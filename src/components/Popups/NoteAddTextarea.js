import "./Popups.styles.css";
import { DataInputLabel } from "./DataInputLabel";
export const NoteAddTextarea = (props) => {
  return (
    <div className="data-input">
      <DataInputLabel title={props.title}></DataInputLabel>
      <textarea
        rows="6"
        cols="21"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};
