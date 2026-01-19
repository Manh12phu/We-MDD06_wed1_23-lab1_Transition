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

/* BOOKING PAGE */
const params=new URLSearchParams(location.search);
const movie=params.get("movie");
const title=document.getElementById("movieTitle");
if(title){
  title.innerText=movie==="it2"?"IT – Chapter 2":"IT – Chapter 1";
}
