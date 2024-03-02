export function displayLoader() {
  document.getElementById("loader").style.display = "block";

  window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });
}
