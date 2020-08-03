window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".Contact").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".Team").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".home").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".about").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
