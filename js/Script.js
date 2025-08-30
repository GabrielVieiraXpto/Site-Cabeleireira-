// script.js
document.getElementById('form-booking').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Agendamento confirmado! Em breve entraremos em contato.');
  this.reset();
});


const menu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
  navList.classList.toggle('active');
});