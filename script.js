const minions = document.querySelector(".minions");
const minion = document.querySelectorAll(".minion");
const hero = document.querySelector(".hero");

minions.addEventListener("click", (e) => {
  //   const test = e.target.getAttribute("src");
  //   hero.removeAttribute("src");
  //   hero.setAttribute("src", test);
  minion.forEach((a) => {
    if (a.classList.contains("transparant")) {
      a.classList.remove("transparant");
    }
  });
  e.target.classList.add("transparant");
  hero.src = e.target.src;
  hero.classList.add("fade");
  setTimeout(() => {
    hero.classList.remove("fade");
  }, 500);
});
