function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; 
      var elementTop = reveals[i].getBoundingClientRect().top; 
      var elementVisible = 150; 
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  reveal();

  console.log("js oke")
  const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight - 100 && boxBottom > 100) {
            box.classList.add('show');     // vào màn hình → hiện
        } else {
            box.classList.remove('show');  // ra khỏi màn hình → ẩn
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
  
    nut.onclick = function() {
      document.body.classList.toggle("dark");
    };
  });
  const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
