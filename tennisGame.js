let scorePlayerOne = 0;
let scorePlayerTwo = 0;

const playPoint = () => {
  return Math.floor(Math.random() * 2);
};

const addPointToScore = (point) => {
  return point === 0 ? scorePlayerOne++ : scorePlayerTwo++;
};

const replaceScoreByValue = (score) => {
  let tennisScore;
  if (score == 0) tennisScore = "Love";
  if (score == 1) tennisScore = "15";
  if (score == 2) tennisScore = "30";
  if (score == 3) tennisScore = "40";

  return tennisScore;
};

const isDeuce = (score1, score2) => {
  return score1 >= 3 && score1 === score2;
};

const hasAdvantage = (score1, score2) => {
  if (score1 >= 4 && score1 === score2 + 1) return true;
  if (score2 >= 4 && score2 === score1 + 1) return true;
  return false;
};

const hasWinner = (score1, score2) => {
  if (score1 >= 4 && score1 >= score2 + 2) return true;
  if (score2 >= 4 && score2 >= score1 + 2) return true;
  return false;
};
const playGame = () => {
  console.log(" --------- Game Start ---------");
  let keepPlaying = true;
  while (keepPlaying) {
    const point = playPoint();
    addPointToScore(point);

    let tennisScoreP1 = replaceScoreByValue(scorePlayerOne);
    let tennisScoreP2 = replaceScoreByValue(scorePlayerTwo);
    let scoreGlobal = `${tennisScoreP1} - ${tennisScoreP2}`;

    if (hasWinner(scorePlayerOne, scorePlayerTwo)) {
      scorePlayerOne > scorePlayerTwo
        ? (scoreGlobal = " --------- Player 1 wins 🎾 ---------")
        : (scoreGlobal = " --------- Player 2 wins 🎾 ---------");
      keepPlaying = false;
    }

    if (isDeuce(scorePlayerOne, scorePlayerTwo)) {
      scoreGlobal = "Deuce";
    }
    if (hasAdvantage(scorePlayerOne, scorePlayerTwo)) {
      scorePlayerOne > scorePlayerTwo
        ? (scoreGlobal = "Advantage Player 1")
        : (scoreGlobal = "Advantage Player 2");
    }
    console.log(scoreGlobal);
  }
  return " --------- Game. Set and Match ---------";
};

console.log(playGame());

module.exports = {
  playPoint,
  replaceScoreByValue,
  isDeuce,
  hasAdvantage,
  hasWinner,
};
