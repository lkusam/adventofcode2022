import { elf } from "../models/elfs.js";

class elfCalories {
  elfsSortByCalrories = [];
  constructor(inputData) {
    let allElfs = [];
    let invidualElfCal = [];

    for (let index = 0; index < inputData.length; index++) {
      let ele = inputData[index];
      if (ele != null && ele != "") {
        invidualElfCal.push(parseFloat(ele));
      } else {
        allElfs.push(invidualElfCal);
        invidualElfCal = [];
      }
    }
    this.elfsList = [];
    allElfs.forEach((elfData, index) => {
      this.elfsList.push(new elf(elfData, index));
    });
    this.elfsSortByCalrories = this.elfsList.sort((a, b) => {
      return b.ElfCalories - a.ElfCalories;
    });
  }
  get topElfCalories() {
    return this.elfsSortByCalrories[0].ElfCalories;
  }

  get topThreeElfCalories() {
    return this.elfsSortByCalrories[0].ElfCalories + this.elfsSortByCalrories[1].ElfCalories + this.elfsSortByCalrories[2].ElfCalories;
  }
}

export { elfCalories };
