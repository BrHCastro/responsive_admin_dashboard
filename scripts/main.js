// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector("main");
let icon = document.querySelector(".toggle ion-icon");

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");

  if (icon.getAttribute("name") === "menu-outline") {
    icon.setAttribute("name", "close-outline");
  } else {
    icon.setAttribute("name", "menu-outline");
  }
});

// add hovered class in selected list item...
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
