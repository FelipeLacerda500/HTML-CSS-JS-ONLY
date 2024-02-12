import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.upadteDisplay();
  sounds.buttonPressAudio.play();
}

export function setMinutes() {
  elements.minutes.setAttribute("contenteditable", true);
  elements.minutes.focus();
  sounds.buttonPressAudio.play();
}

export function setSeconds() {
  elements.seconds.setAttribute("contenteditable", true);
  elements.seconds.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgAudio.play();
  } else {
    sounds.bgAudio.pause();
    sounds.bgAudio.currentTime = 0;
  }
}
