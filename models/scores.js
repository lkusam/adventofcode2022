class scores {
  constructor(oppScore, myScore) {
    this.oppSel = oppScore;
    this.mySel = this.getMyMove(myScore);
    this.oppScore = this.getScore(oppScore);
    this.myScore = this.getScore(this.mySel);
    this.winScore = this.myScore - this.oppScore;
    this.result = this.getResult();
    console.log(`Opp :${this.oppSel} - ${this.oppScore}. MyScore : ${this.mySel} - ${this.myScore}. WinScore : ${this.winScore}clear Current round result : ${this.result}`);
  }
  getMyMove(givenMove) {
    if (givenMove == "X") {
      switch (this.oppSel) {
        case "A":
          return "Z";
        case "B":
          return "X";
        case "C":
          return "Y";
      }
    } else if (givenMove == "Y") {
      switch (this.oppSel) {
        case "A":
          return "X";
        case "B":
          return "Y";
        case "C":
          return "Z";
      }
    } else {
      switch (this.oppSel) {
        case "A":
          return "Y";
        case "B":
          return "Z";
        case "C":
          return "A";
      }
    }
  }
  getResult() {
    if (this.winScore == 1 || this.winScore == -2) {
      return 6 + this.myScore;
    } else if (this.winScore == 0) {
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
