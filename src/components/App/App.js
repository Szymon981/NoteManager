import "./App.styles.css";
import { Board } from "../Board/Board";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="app__header-title-container">
        <h1 className="app__header-title">WebconNote</h1>
      </div>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
      <Board></Board>
    </div>
  );
};

// const mapStoreToProps = (store) => {
//   return {
//     a: store.rA.a,
//     b: store.rB.b,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateA: (b) => dispatch({ type: "UPDATE_A", b: b }),
//     updateB: (a) => dispatch({ type: "UPDATE_B", a: a }),
//   };
// };

export default App;
