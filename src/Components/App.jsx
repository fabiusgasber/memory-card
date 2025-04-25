import "../Stylesheets/App.css";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";
import getNflTeams from "./fetch";

function App() {
  return (
    <>
      <h1>Gridiron Memory</h1>
      <Gameboard />
    </>
  );
}

export default App;
