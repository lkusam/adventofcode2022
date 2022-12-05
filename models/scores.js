class scores {
  constructor(oppScore, myScore) {
    this.oppSel = oppScore;
    this.mySel = myScore;

    this.oppScore = this.getScore(oppScore);
    this.myScore = this.getScore(myScore);
    this.winScore = this.myScore - this.oppScore;
    this.result = this.getResult();
    console.log(`Opp :${this.oppSel} - ${this.oppScore}. MyScore : ${this.mySel} - ${this.myScore}. WinScore : ${this.winScore}clear Current round result : ${this.result}`);
  }
  getResult() {
    if (this.myScore > this.oppScore) {
      return 6 + this.myScore;
    } else if (this.myScore == this.oppScore) {
      return 3 + this.myScore;
    } else {
      return this.myScore;
    }
  }

  getScore(val) {
    if (val == "A" || val == "X") {
      return 1;
    } else if (val == "B" || val == "Y") {
      return 2;
    } else if (val == "C" || val == "Z") {
      return 3;
    }
  }
}

export { scores };
