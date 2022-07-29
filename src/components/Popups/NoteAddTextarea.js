import "./Popups.styles.css";

export const NoteAddTextarea = ({ value, handleChange }) => {
  const changer = (evt) => {
    handleChange(evt.target.value);
  };
  return (
    <div>
      <textarea rows="6" cols="21" value={value} onChange={changer} />
    </div>
  );
};
