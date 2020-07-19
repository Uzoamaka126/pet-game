const gameState = {
  current: 'INIT',
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    if (this.clock === this.wakeTime) {
      this.wake()
    }
    console.log("clock", this.clock);
    return this.clock;
  },
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("hatched");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleAllUserAction(icon) {
    // can't do actions while in this states
    console.log(icon);
    if (["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)) {
      return;
    }
    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    // execute the currenty selected icons
    switch (icon) {
      case "weather":
        this.changeWeather();
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  }
}

export default gameState;
