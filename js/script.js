// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#Menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
//klip diluar sidebar untuk menghilangkan nav
const Menu = document.querySelector("#Menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarnav.contains(e.target))
    navbarnav.classList.remove("active");
});
