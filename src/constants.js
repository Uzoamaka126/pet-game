export const ICONS = ["fish", "poop", "weather"];
export const TICK_RATE = 1000;
export const SCENES = ["day", "rain"];
export const RAIN_CHANCE = 0.2;
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 4;

export const getNextHungerTime = clock => Math.floor(Math.random() * 3) + 5 + clock; // b/w 0 and 2

export const getNextDieTime = clock => Math.floor(Math.random() * 2) + 3 + clock; // b/w 0 and 2

export const getNextPoopTime = clock => Math.floor(Math.random() * 3) + 4 + clock; // b/w 0 and 2

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
}

// we want to rewrite the modal every single time because we want to hide the modal when there 
//  is no text in there and we already did that with the CSS Selector
export const writeModal = function writeModal(text = "") {
  document.querySelector(".modal-inner").innerHTML = `<div className="modal-inner">${text}</div>`
}