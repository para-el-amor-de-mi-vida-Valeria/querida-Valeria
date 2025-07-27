// Abrir y cerrar el drawer
const menuIcon = document.querySelector('#menu-icon');
const drawer = document.querySelector('#drawer');
const navLinks = document.querySelectorAll('.drawer-content a');

// Abrir menú
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
  link.addEventListener('click', (e) => {
    const currentURL = window.location.href;
    const linkHref = link.href;

    if (currentURL === linkHref) {
      e.preventDefault();
    }

    drawer.classList.remove('open');
    menuIcon.classList.remove('bx-x');
  });
});

// Resaltar el enlace activo del menú
navLinks.forEach(link => {
  const linkHref = link.href;
  const currentURL = window.location.href;

  if (currentURL === linkHref) {
    link.classList.add('active');
  }
});

// Botón de volver a atrás
if (!location.pathname.endsWith("index.html") && location.pathname !== "/") {
  document.getElementById("volverBtn").style.display = "inline-block";
}

// Cerrar drawer al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!drawer.contains(e.target) && !menuIcon.contains(e.target)) {
    drawer.classList.remove('open');
    menuIcon.classList.remove('bx-x');
    }
  });
