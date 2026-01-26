const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle) toggle.onclick = () => menu.classList.toggle('open');

const modal = document.getElementById('modal');
function openDetail(n,p,d,i){
  modal.style.display='grid';
  modalName.innerText=n;
  modalPrice.innerText=p;
  modalDesc.innerText=d;
  modalImg.src=i;
}
function closeDetail(){modal.style.display='none'}

function addCart(){
  localStorage.setItem('cart',modalName.innerText);
  showToast('Đã thêm vào giỏ');
  closeDetail();
}

const toast=document.querySelector('.toast');
function showToast(t){
  toast.innerText=t;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2000);
}

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  localStorage.setItem('name',name.value);
  showToast('Gửi thành công');
});
