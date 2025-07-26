// Abrir y cerrar el drawer
const menuIcon = document.querySelector('#menu-icon');
const drawer = document.querySelector('#drawer');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  drawer.classList.toggle('open');
};

// Cambiar fondo del header al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.top-header');
  header.classList.toggle('headerScroll', window.scrollY > 0);
});

// Cierra el menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    menuIcon.classList.remove('bx-x');
  });
});

// Botón de volver a atrás
if (!location.pathname.endsWith("index.html") && location.pathname !== "/") {
  document.getElementById("volverBtn").style.display = "inline-block";
}
