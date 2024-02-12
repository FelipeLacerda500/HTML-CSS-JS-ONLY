import state from "./state.js";
import * as events from "./events.js";
import * as timer from "./timer.js";

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  timer.upadteDisplay();

  events.registerControls();
  events.setMinutes();
  events.setSeconds();
}