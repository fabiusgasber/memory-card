import "../Stylesheets/App.css";
import Gameboard from "./Gameboard";

function App() {
  return (
    <>
      <header>
        <h1>Gridiron Memory</h1>
      </header>
      <main>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
        <Gameboard />
      </main>
    </>
  );
}

export default App;
