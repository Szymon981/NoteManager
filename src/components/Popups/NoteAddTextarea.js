import "./Popups.styles.css";

export const NoteAddTextarea = (props) => {
  const changer = (evt) => {
    props.handleChange(evt.target.value);
  };
  return (
    <div>
      <textarea rows="6" cols="21" value={props.value} onChange={changer} />
    </div>
  );
};
