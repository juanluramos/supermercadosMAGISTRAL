document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     CAMBIO DE CATEGORÍA (DESKTOP)
     =============================== */
  const botones = document.querySelectorAll('.menu-lateral li');
  const categorias = document.querySelectorAll('.categoria-producto');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {

      botones.forEach(b => b.classList.remove('activa'));
      categorias.forEach(c => c.classList.remove('activa'));

      boton.classList.add('activa');
      document
        .getElementById(boton.dataset.cat)
        .classList.add('activa');

      /* Cerrar menú en móvil al elegir categoría */
      const lista = document.querySelector('.menu-lateral ul');
      const toggle = document.querySelector('.toggle-categoria');

      if (lista && toggle && window.innerWidth <= 1024) {
        lista.classList.remove('abierto');
        toggle.classList.remove('activo');
      }
    });
  });

  botones[0]?.click();


  /* ===============================
     BOTÓN + (MÓVIL / TABLET)
     =============================== */
  const toggleBtn = document.querySelector('.toggle-categoria');
  const listaCategorias = document.querySelector('.menu-lateral ul');

  if (toggleBtn && listaCategorias) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      listaCategorias.classList.toggle('abierto');
      toggleBtn.classList.toggle('activo');
    });
  }

});


