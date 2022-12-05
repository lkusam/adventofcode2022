import { scores } from "../models/scores.js";

class rockPaperScissor {
  constructor(inputData) {
    this.totalPlays = [];
    inputData.forEach((ele, index) => {
      let scoreSplit = ele.split(" ");
      let playScore = new scores(scoreSplit[0], scoreSplit[1]);
      this.totalPlays.push(playScore);
    });
  }
  get totalScore() {
    let initialValue = 0;
    let sum = this.totalPlays.reduce(function (accumulator, curValue) {
      return accumulator + curValue.result;
    }, initialValue);
    console.log(sum);
    return sum;
  }
}

export { rockPaperScissor };
