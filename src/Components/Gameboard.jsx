import Cards from "./Cards";
import "../Stylesheets/Gameboard.css"
import { randomizeArray, useFetch } from "./fetch"
import useScoreboard from "./Scoreboard"

const Gameboard = () => {
    
   const { data, setData, reload, setReload } = useFetch();
   const { score, highScore, setHighscore, resetScore, wonRound, isHighscore } = useScoreboard();
   
   const handleClick = () => {
    setData(randomizeArray(data));
    if(score + 1 < data.length) {
        wonRound();
    }
    else if(score >= data.length - 1) {
        if(isHighscore) {
          setHighscore(score + 1);
        }
        resetScore();
        setReload(!reload);
    }
   }

  return (
    <main>
    <section>
      {data ? (
        data.map((teams) => <Cards key={teams.team.uid} url={teams.team.logos[0].href} name={teams.team.displayName} onClick={() => setData(randomizeArray(data))} />)
      ) : (
        <h1>...Loading</h1>
      )}
      </section>
    </main>
  );
};

export default Gameboard;
