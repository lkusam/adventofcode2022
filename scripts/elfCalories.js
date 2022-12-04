import { elf } from "./models/elfs.js";

class elfCalories {
  elfsSortByCalrories = elfsList.sort((a, b) => {
    return b.ElfCalories - a.ElfCalories;
  });
  constructor(inputData) {
    let allElfs = [];
    let invidualElfCal = [];

    for (let index = 0; index < input.length; index++) {
      let ele = input[index];
      if (ele != null && ele != "") {
        invidualElfCal.push(parseFloat(ele));
        console.log(ele);
      } else {
        allElfs.push(invidualElfCal);
        invidualElfCal = [];
      }
    }
    let elfsList = [];
    allElfs.forEach((elfData, index) => {
      elfsList.push(new elf(elfData, index));
    });
    console.log(elfsList);
    this.elfsList;
  }
  get topElfCalories() {
    return this.elfsSortByCalrories[0].ElfCalories;
  }

  get topThreeElfCalories() {
    return elfsSortByCalrories[0].ElfCalories + elfsSortByCalrories[1].ElfCalories + elfsSortByCalrories[2].ElfCalories;
  }
}

export { elfCalories };
