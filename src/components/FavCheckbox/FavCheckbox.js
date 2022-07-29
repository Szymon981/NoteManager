import "./FavCheckbox.styles.css";
export const FavCheckbox = ({ isFav, handleChange }) => {
  return (
    <div className="fav-checkbox">
      <label>Ulubiona notatka:</label>
      <input type="checkbox" defaultChecked={isFav} onChange={handleChange} />
    </div>
  );
};
