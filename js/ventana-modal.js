document.addEventListener('DOMContentLoaded', () => {

  const ofertas = document.querySelectorAll(".oferta");
  const modal = document.getElementById("modalProducto");
  const cerrar = document.getElementById("cerrarModal");

  if (!modal || !cerrar) return;

  ofertas.forEach(oferta => {
    oferta.addEventListener("click", () => {

      document.getElementById("modalImg").src = oferta.dataset.img || "";
      document.getElementById("modalTitulo").textContent = oferta.dataset.titulo || "";
      document.getElementById("modalPrecio").textContent = oferta.dataset.precio || "";
      document.getElementById("modalDescripcion").textContent = oferta.dataset.descripcion || "";
      document.getElementById("modalProcedencia").textContent = oferta.dataset.procedencia || "";
      document.getElementById("modalCalidad").textContent = oferta.dataset.calidad || "";
      document.getElementById("modalConservacion").textContent = oferta.dataset.conservacion || "";
        
      modal.classList.add("activo");
    });
  });

  cerrar.addEventListener("click", () => {
    modal.classList.remove("activo");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("activo");
  });

});
