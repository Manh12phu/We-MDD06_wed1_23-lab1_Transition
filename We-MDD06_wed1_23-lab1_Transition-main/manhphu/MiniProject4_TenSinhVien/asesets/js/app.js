// Mobile menu
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
if(toggle) toggle.onclick = () => menu.classList.toggle("show");

// AOS
if(window.AOS) AOS.init();

// Swiper
if(window.Swiper){
  new Swiper(".swiper",{loop:true,autoplay:{delay:3000}});
}

// Tabs pricing
const tabs=document.querySelectorAll(".tab");
const boxes=document.querySelectorAll(".price-box");
tabs.forEach((t,i)=>{
  t.onclick=()=>{
    document.querySelector(".tab.active")?.classList.remove("active");
    document.querySelector(".price-box.active")?.classList.remove("active");
    t.classList.add("active");
    boxes[i].classList.add("active");
  }
});

// Form
const form=document.getElementById("contactForm");
if(form){
  form.onsubmit=e=>{
    e.preventDefault();
    localStorage.setItem("email",email.value);
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),2000);
  }
}
new Swiper(".reviewSwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    breakpoints:{
      768:{ slidesPerView:2 },
      1024:{ slidesPerView:3 }
    }
  });
  new Swiper(".reviewSwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    spaceBetween: 30,
    breakpoints:{
      768:{ slidesPerView:2 },
      1024:{ slidesPerView:3 }
    }
  });
  