export function spaStyle(fileName) {
  const spaStyleMetaTag = document.getElementById("spa-style");

  const styleFolder = "../styles";

  if (fileName === "/") {
    fileName = "/home";
  }

  spaStyleMetaTag.href = styleFolder + fileName + ".css";
}

export function headerStyleLogic() {
  function setDropdownState(showDropdown) {
    document.querySelector(".dropdown-menu").dataset.visibility = showDropdown
      ? "visible"
      : "hidden";
  }

  function iconAnimation() {
    if (dropDownIcon.dataset.iconState === "icon-off") {
      dropDownIcon.setAttribute("data-icon-state", "icon-on");
      setDropdownState(true);
    } else {
      dropDownIcon.setAttribute("data-icon-state", "icon-off");
      setDropdownState(false);
    }
  }

  const dropDownIcon = document.querySelector(".dropdown-icon");
  dropDownIcon.addEventListener("click", iconAnimation);

  globalThis.addEventListener("load", () => {
    if (document.documentElement.offsetWidth <= 768) {
      document.querySelector(".dropdown-menu").dataset.visibility = "hidden";
    }
  });

  globalThis.addEventListener("resize", function () {
    if (
      document.documentElement.offsetWidth > 768 &&
      dropDownIcon.dataset.iconState === "icon-on"
    ) {
      iconAnimation();
    }
  });
}
