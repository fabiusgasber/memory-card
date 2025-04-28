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
    const id = e.target.closest("figure").getAttribute("data-id");
    if(wasSelected(id) && isHighscore()) {
      setHighscore(score);
      resetScore();
      setReload(!reload);
      setSelected([]);
    }
    else if(wasSelected(id)){
      resetScore();
      setReload(!reload);
      setSelected([]);
    }
    else if(!wasSelected(id)){
      setData(randomizeArray(data));
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
      }  
    }
   }

  return (
    <main>
    <section>
        <span>Score: {score} </span>
        <span>Highscore: {highScore} </span>
    </section>
    <section>
      {data ? (
        data.map((teams) => <Cards key={teams.team.uid} uid={teams.team.uid} url={teams.team.logos[0].href} name={teams.team.displayName} onClick={handleClick} />)
      ) : (
        <h1>...Loading</h1>
      )}
      </section>
    </main>
  );
};

export default Gameboard;
