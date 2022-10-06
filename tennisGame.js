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

module.exports = {
  playPoint,
  addPointToScore,
  scorePlayerOne,
  scorePlayerTwo,
};
