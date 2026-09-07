const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.header nav');
const dialog=document.querySelector('#reserve-dialog');
const closeButton=document.querySelector('.reserve-dialog .close');
const confirmButton=document.querySelector('.confirm-demo');

menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.header nav a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

document.querySelectorAll('[data-reserve]').forEach(button=>button.addEventListener('click',()=>{
  if(typeof dialog?.showModal==='function') dialog.showModal();
}));

closeButton?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',event=>{
  if(event.target===dialog) dialog.close();
});
confirmButton?.addEventListener('click',()=>{
  confirmButton.textContent='Demonstração concluída ✓';
  confirmButton.disabled=true;
});
