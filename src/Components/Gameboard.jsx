import Cards from "./Cards";
import "../Stylesheets/Gameboard.css"
import { randomizeArray, useFetch } from "./fetch"
import useScoreboard from "./Scoreboard"
import { useState } from "react";

const Gameboard = () => {
    
   const { data, setData, reload, setReload } = useFetch();
   const { score, highScore, setHighscore, resetScore, wonRound, isHighscore } = useScoreboard();
   const [selected, setSelected] = useState([]);

   const wasSelected = (id) => selected.find(elem => elem === id);
   const addSelected = (id) => setSelected((selected) => [...selected, id]);

   const handleClick = (e) => {
    const id = e.target.closest("button").getAttribute("data-id");
    if(wasSelected(id) && isHighscore()) {
      setHighscore(score);
      resetScore();
      setReload(!reload);
      setSelected([]);
      setData(null);
    }
    else if(wasSelected(id)){
      resetScore();
      setReload(!reload);
      setSelected([]);
      setData(null);
    }
    else if(!wasSelected(id)){
      setData([...randomizeArray(data)]);
      if(score + 1 < data.length) {
          wonRound();
          addSelected(id);
      }
      else if(score >= data.length - 1) {
          if(isHighscore()) {
            setHighscore(score + 1);
          }
          resetScore();
          setReload(!reload);
          setData(null);
      }  
    }
    const cards = Array.from(document.querySelectorAll("main button"));
    const firstCard = cards.find(elem => elem.getAttribute("data-id") === data[0].team.uid);
    firstCard?.closest("button").focus();
   }

  return (
    <>
    <section className="scoreboard">
      <div tabIndex={0}>
        <label htmlFor="score">Score: </label>
        <output id="score">{score}</output>
      </div>
      <div tabIndex={0}>
        <label htmlFor="highscore">Highscore: </label>
        <output id="highscore">{highScore}</output>
      </div>
    </section>
    <section>
      {data ? (
        data.map((teams) => <Cards key={teams.team.uid} uid={teams.team.uid} url={teams.team.logos[0].href} name={teams.team.displayName} onClick={handleClick} />)
      ) : (
        <h2>...Loading</h2>
      )}
      </section>
    </>
  );
};

export default Gameboard;
