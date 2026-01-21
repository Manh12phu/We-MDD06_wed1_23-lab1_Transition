
document.getElementById("toggleTheme").onclick = function () {
  document.body.classList.toggle("dark");
};


const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  sections.forEach((sec, i) => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 100 && top > -sec.offsetHeight) {
          links.forEach(l => l.classList.remove("active"));
          links[i].classList.add("active");
      }
  });
});

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
  boxes.forEach(box => {
      const top = box.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
          box.classList.add("show");
      }
  });
});

const jumpBtn = document.querySelector(".jump");

jumpBtn.addEventListener("mouseover", () => {
  jumpBtn.classList.add("animate");
  setTimeout(() => jumpBtn.classList.remove("animate"), 400);
});


const circle = document.querySelector(".circle");

document.addEventListener("mousemove", e => {
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
});
