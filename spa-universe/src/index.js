import { Router } from "./router.js";
import * as Styles from "./styles.js";
import { displayLoader } from "./loader.js";

function handleStyles() {
  Styles.headerStyleLogic();
  const updateStyles = () => Styles.spaStyle(globalThis.location.pathname);

  window.addEventListener("load", updateStyles);
  window.addEventListener("popstate", updateStyles);
}

function handleNavbarClick(router) {
  const updateStyles = () => Styles.spaStyle(globalThis.location.pathname);
  router.route();
  updateStyles();
}

export function runApp() {
  displayLoader();

  const router = new Router();
  router.addRoute("/", "../pages/home.html");
  router.addRoute("/universe", "../pages/universe.html");
  router.addRoute("/space-exploration", "../pages/space-exploration.html");

  router.handle();

  const navbarAnchors = document.querySelectorAll(".navbar-anchor");
  navbarAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => handleNavbarClick(router));
  });

  document.addEventListener("DOMContentLoaded", () => handleStyles());

  window.addEventListener("popstate", () => {
    handleStyles();
    router.handle();
  });
}
