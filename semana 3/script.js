// =============================================
// TASK 5: JavaScript - Interactividad básica
// =============================================

// Muestra un mensaje de bienvenida al cargar la página
window.addEventListener('load', function () {
    var bienvenida = document.getElementById('bienvenida');
    bienvenida.style.display = 'block';

    // Oculta el mensaje después de 4 segundos
    setTimeout(function () {
        bienvenida.style.display = 'none';
    }, 4000);
});

// Función para mostrar u ocultar el contenido de una sección
function toggleSeccion(idContenido, boton) {
    var contenido = document.getElementById(idContenido);
    var flecha = boton.querySelector('.flecha');

    // Alterna entre mostrar y ocultar
    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
        flecha.classList.add('abierta');
    } else {
        contenido.style.display = 'none';
        flecha.classList.remove('abierta');
    }
}

// =============================================
// Descripciones de cada habilidad
// =============================================
var descripciones = {
    html: '🌐 HTML es el lenguaje base de toda página web. Permite estructurar el contenido usando etiquetas como títulos, párrafos, imágenes y enlaces.',
    css: '🎨 CSS da estilo y diseño a las páginas web. Controla colores, tipografías, espaciado, animaciones y hace que el sitio sea visualmente atractivo.',
    js: '⚡ JavaScript es el lenguaje que le da vida a las páginas web. Permite agregar interactividad, responder a clics del usuario y modificar el contenido dinámicamente.',
    mercadeo: '📈 El Mercadeo estudia el comportamiento del consumidor y diseña estrategias para conectar productos o servicios con las personas correctas en el momento indicado.',
    publicidad: '📣 La Publicidad crea mensajes creativos y persuasivos para comunicar el valor de una marca, generando recordación y atrayendo nuevos clientes.'
};

// Guarda cuál tag está activo actualmente
var tagActivo = null;

// Muestra la descripción de la habilidad seleccionada
function mostrarHabilidad(habilidad) {
    var caja = document.getElementById('desc-habilidad');
    var texto = document.getElementById('texto-habilidad');
    var tags = document.querySelectorAll('.tag');

    // Quita el estilo activo de todos los tags
    tags.forEach(function (tag) {
        tag.classList.remove('tag-activo');
    });

    // Si se hizo clic en el mismo tag activo, lo cierra
    if (tagActivo === habilidad) {
        caja.style.display = 'none';
        tagActivo = null;
        return;
    }

    // Muestra la descripción del tag seleccionado
    texto.textContent = descripciones[habilidad];
    caja.style.display = 'block';
    tagActivo = habilidad;

    // Marca como activo el tag clickeado
    event.target.classList.add('tag-activo');
}

// Cambia el texto del párrafo del formulario al hacer clic en "Enviar"
var formulario = document.querySelector('form');
if (formulario) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Evita que recargue la página
        var mensaje = document.getElementById('mensaje-form');
        mensaje.textContent = '✅ ¡Mensaje enviado! Me pondré en contacto pronto.';
        mensaje.style.color = 'rgb(255, 255, 82)';
    });
}

