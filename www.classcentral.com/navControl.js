// START: Main Navbar
var nav = document.querySelector(".main-nav-dropdown.js-main-nav-dropdown");
var navMenuTrigger = document.querySelector(
  "div[data-name=MAIN_NAV_TRIGGER_CONTAINER]"
);
var htmlElement = document.querySelector("html")
navMenuTrigger.addEventListener("mouseover", openNavMenu);

nav.addEventListener("mouseleave", closeNavMenu);

// END: Main Navbar

// START: The Report

var theReport = document.querySelector("div[data-menu=report]");
var theReportMenu = document.querySelector("div[data-menu-dropdown=report]");

theReport.addEventListener("mouseover", openTheReport);
theReport.addEventListener("mouseleave", closeTheReport);

// END: The Report

// Close all menu when click on Outside
window.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    closeNavMenu();
  }
});

// Open Main Nav Menu
function openNavMenu() {
  nav.classList.add("is-open");
  backgroundFadeIn();
  htmlElement.classList.add("nav-open");
}

// Close Main Nav Menu
function closeNavMenu() {
  nav.classList.remove("is-open", "has-visibile-subsection");
  backgroundFadeOut();
  htmlElement.classList.remove("nav-open");
}

// Opening Sub Menu
function openSubmenu(obj) {
  var getDiv = JSON.parse(obj.getAttribute("data-detail")).childListId;
  var submenuItem = document.querySelector(`div[data-list-id=${getDiv}]`);

  // getting the list of sub menu
  var submenuList = document.querySelector(
    ".main-nav-dropdown__subsections"
  ).children;

  // closing whatever sub menu is open
  for (let i = 0; i < submenuList.length; i++) {
    submenuList[i].setAttribute("hidden", "");
  }

  // Opening submenu which we want
  nav.classList.add("has-visibile-subsection");
  submenuItem.removeAttribute("hidden");
}

function openTheReport() {
  closeNavMenu();
  theReportMenu.classList.remove("animate-fade-hidden");
  theReportMenu.classList.add("animate-fade-entered");
  backgroundFadeIn();
}

function closeTheReport() {
  theReportMenu.classList.remove("animate-fade-entered");
  theReportMenu.classList.add("animate-fade-hidden");
  backgroundFadeOut();
}

// Background FadeIn
function backgroundFadeIn() {
  var el = document.querySelector(
    "#page-home > div.contain-page > header > div.width-100.height-100.fixed.top.left"
  );
  el.classList.remove("animate-fade-hidden");
}

// Background FadeOut
function backgroundFadeOut() {
  var el = document.querySelector(
    "#page-home > div.contain-page > header > div.width-100.height-100.fixed.top.left"
  );
  el.classList.add("animate-fade-hidden");
}