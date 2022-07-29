import "./ActionButton.styles.css";

export const ActionButton = ({
  color,
  position,
  name,
  onClickHandler,
  width,
  height,
  float,
}) => {
  return (
    <div className="action-button">
      <button
        className="action-button__button"
        style={{
          backgroundColor: color,
          float: float,
          width: width,
          height: height,
          position: position,
        }}
        onClick={onClickHandler}
      >
        {name}
      </button>
    </div>
  );
};
