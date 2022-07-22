import "./ActionButton.styles.css";

export const ActionButton = (props) => {
  return (
    <div className="action-button">
      <button
        className="action-button__button"
        style={{ backgroundColor: props.color, float: props.position }}
        onClick={props.onClickHandler}
      >
        {props.name}
      </button>
    </div>
  );
};
