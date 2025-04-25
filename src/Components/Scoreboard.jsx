import { useState } from "react";

const useScoreboard = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighscore] = useState(0);

    const resetScore = () => setScore(0);
    const wonRound = () => setScore(score + 1);
    const isHighscore = () => score > highScore;

    return { score, highScore, setHighscore, resetScore, wonRound, isHighscore };
}

export default useScoreboard;