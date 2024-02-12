import * as actions from "./actions.js";
import * as elements from "./elements.js";
import * as timer from "./timer.js";
import state from "./state.js";
import { controls } from "./elements.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function setMinutes() {
  elements.minutes.addEventListener("focus", () => {
    elements.minutes.textContent = "";
  });

  elements.minutes.addEventListener("keydown", (event) => {
    if (!/^\d$|^Backspace$|^Delete$|^Arrow/.test(event.key)) {
      event.preventDefault();
    }
    if (/^Enter$|^Escape$/.test(event.key)) {
      actions.setSeconds();
    }
  });

  elements.minutes.addEventListener("blur", (event) => {
    let time = Number(event.currentTarget.textContent);
    time = time > 60 || time.length > 2 ? 60 : time;
    state.minutes = time;
    timer.upadteDisplay();
    elements.minutes.removeAttribute("contenteditable");
    actions.setSeconds();
  });
}

export function setSeconds() {
  elements.seconds.addEventListener("focus", () => {
    elements.seconds.setAttribute("contenteditable", true);
    elements.seconds.textContent = "";
  });

  elements.seconds.addEventListener("keydown", (event) => {
    if (!/^\d$|^Backspace$|^Delete$|^Arrow/.test(event.key)) {
      event.preventDefault();
    }
    if (/^Enter$|^Escape$/.test(event.key)) {
      elements.seconds.blur();
    }
  });

  elements.seconds.addEventListener("blur", (event) => {
    let time = Number(event.currentTarget.textContent);
    time = time > 60 || time.length > 2 ? 60 : time;
    state.seconds = time;
    timer.upadteDisplay();
    elements.seconds.removeAttribute("contenteditable");
  });
}
