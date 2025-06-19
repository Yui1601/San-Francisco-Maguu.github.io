document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const encuestaForm = document.getElementById('encuestaForm');

  function formatearTexto(input) {
    let texto = input.value.toLowerCase();
    texto = texto.replace(/\b\w/g, letra => letra.toUpperCase());
    input.value = texto;
  }

  const camposAFormatear = ['nombre', 'comentario'];
  camposAFormatear.forEach(id => {
    const campo = document.getElementById(id);
    if (campo) {
      campo.addEventListener('blur', () => formatearTexto(campo));
    }
  });

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  if (encuestaForm) {
    encuestaForm.addEventListener('submit', (e) => {
      const edadInput = document.getElementById('edad');
      const comentarioInput = document.getElementById('comentario');

      const edad = parseInt(edadInput?.value || '');
      const comentario = (comentarioInput?.value || '').toLowerCase().trim();

      const groserias = [
        "idiota", "tonto", "estúpido", "imbécil", "mierda", "puta",
        "pendejo", "cabron", "maldito", "puto", "maricon", "chaquetas",
        "wey", "baboso", "putito", "putita"
      ];
      const contieneGroserias = groserias.some(palabra => comentario.includes(palabra));

      if (isNaN(edad)) {
        alert("Por favor, ingresa tu edad.");
        e.preventDefault();
        return;
      }

      if (edad < 18) {
        alert("Debes tener al menos 18 años para enviar comentarios.");
        e.preventDefault();
        return;
      }

      if (contieneGroserias) {
        alert("Tu comentario contiene lenguaje inapropiado. Por favor, modifícalo.");
        e.preventDefault();
        return;
      }

      window.open('gracias.html', '_blank');
    });
  }

  const imagenes = document.querySelectorAll('.imagen-interactiva');
  imagenes.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('marcada');
    });
  });
});