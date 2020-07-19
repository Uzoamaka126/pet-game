import gameState from './gameState';
import { TICK_RATE } from './constants';
import initButtons from './button';

async function init() {
  console.log("starting game");

  initButtons(gameState.handleAllUserAction)
  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();