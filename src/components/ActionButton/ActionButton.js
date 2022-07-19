import "./ActionButton.styles.css";

export const ActionButton = (props) => {
  return (
    <div className="action-button-div">
      <button className="action-button" onClick={props.onClickHandler}>
        {props.name}
      </button>
    </div>
  );
};
