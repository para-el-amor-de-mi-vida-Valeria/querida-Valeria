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

// Activar el link de la sección visible
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.drawer-nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(section => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('.drawer-nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

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
