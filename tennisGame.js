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

module.exports = {
  playPoint,
  addPointToScore,
  replaceScoreByValue,
};
