let scorePlayerOne = 0;
let scorePlayerTwo = 0;

const playPoint = () => {
  return Math.floor(Math.random() * 2);
};

const addPointToScore = (point) => {
  if (point === 0) {
    return scorePlayerOne++;
  } else {
    return scorePlayerTwo++;
  }
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
module.exports = {
  playPoint,
  addPointToScore,
  replaceScoreByValue,
  isDeuce,
  hasAdvantage,
};
