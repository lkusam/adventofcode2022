class elf {
  /**
   *
   * @param {array[string]} params string of calaroies
   * @param {Number} index Current index of the elf
   */
  constructor(params, index) {
    this.Name = "Elfo" + (index + 1);
    this.Calories = params;
  }

  get ElfCalories() {
    return this.Calories.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

export { elf };
