/* DARK MODE */
document.getElementById("toggleTheme").onclick=()=>{
  document.body.classList.toggle("light");
};

/* CURSOR */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

/* SCROLL REVEAL */
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

/* SCROLL SPY */
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    if(scrollY >= sec.offsetTop-150){
      current=sec.id;
    }
  });
  links.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href")==="#"+current){
      a.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CUSTOM CURSOR
  ========================== */
  const cursor = document.querySelector(".cursor");
  if(cursor){
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }

  /* =========================
     SCROLL REVEAL
  ========================== */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll(){
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* =========================
     DARK / LIGHT MODE
  ========================== */
  const toggleBtn = document.getElementById("nut") || document.getElementById("darkToggle");
  if(toggleBtn){
    toggleBtn.onclick = () => {
      document.body.classList.toggle("light");
    };
  }

  /* =========================
     BOOKING PAGE LOGIC
  ========================== */
  const params = new URLSearchParams(window.location.search);
  const movie = params.get("movie");

  const titleEl  = document.getElementById("movieTitle");
  const posterEl = document.getElementById("moviePoster");

  if(titleEl && posterEl){
    if(movie === "it1"){
      titleEl.innerText = "IT – Chapter 1";
      posterEl.src = "./assets/img/ItChapterTwoTeaser.jpg";
    }
    else if(movie === "it2"){
      titleEl.innerText = "IT – Chapter 2";
      posterEl.src = "./assets/img/z7437887928385_8128671cfe951c996a6ca42358b3bd36.jpg";
    }
    else{
      titleEl.innerText = "Phim chưa xác định";
    }
  }

  /* =========================
     SEAT & PRICE
  ========================== */
  const seats = document.querySelectorAll(".seat");
  const showtime = document.getElementById("showtime");
  const totalPrice = document.getElementById("totalPrice");

  function updatePrice(){
    if(!showtime || !totalPrice) return;
    const count = document.querySelectorAll(".seat.selected").length;
    totalPrice.innerText = (count * Number(showtime.value)).toLocaleString();
  }

  seats.forEach(seat => {
    seat.addEventListener("click", () => {
      seat.classList.toggle("selected");
      updatePrice();
    });
  });

  if(showtime){
    showtime.addEventListener("change", updatePrice);
  }

});
