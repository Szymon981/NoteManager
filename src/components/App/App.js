import "./App.styles.css";
import { Board } from "../Board/Board";

const App = () => {
  return (
    <div className="app">
      <div className="app__header-title-container">
        <h1 className="app__header-title">WebconNote</h1>
      </div>
      <Board></Board>
    </div>
  );
};

export default App;
