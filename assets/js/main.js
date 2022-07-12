const main = document.querySelector("main");
const menu_toggle = document.querySelector(".bars");
const list_menu = document.querySelector(".list");
const list_items = document.querySelectorAll(".list-item");
const bar1 = document.querySelector(".bars :first-child");
const bar2 = document.querySelector(".bars :nth-child(2)");
const bar3 = document.querySelector(".bars :last-child");
const toTop = document.querySelector(".to-top");

menu_toggle.addEventListener("click", () => {
  main.classList.toggle("bg-grey");
  list_menu.classList.toggle("show-menu");
  bar1.classList.toggle("bar-rotate_top");
  bar3.classList.toggle("bar-rotate_bot");
  bar2.classList.toggle("bar-white");
});

list_items.forEach((item) => {
  item.addEventListener("click", () => {
    main.classList.remove("bg-grey");
    list_menu.classList.remove("show-menu");
    bar1.classList.remove("bar-rotate_top");
    bar3.classList.remove("bar-rotate_bot");
    bar2.classList.remove("bar-white");
  });
});

function show_to_top() {
  let y = window.scrollY;

  if (y >= 200) {
    toTop.classList.add("show-to-top");
  } else {
    toTop.classList.remove("show-to-top");
  }
}

window.addEventListener("scroll", () => {
  show_to_top();
});

toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
