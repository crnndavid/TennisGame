let scorePlayerOne = 0;
let scorePlayerTwo = 0;

const playPoint = () => {
  return Math.floor(Math.random() * 2);
};

module.exports = {
  playPoint,
};
