// script.js
document.getElementById('form-booking').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Agendamento confirmado! Em breve entraremos em contato.');
  this.reset();
});


