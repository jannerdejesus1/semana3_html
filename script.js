// =============================================
// 1. Welcome message
// =============================================
alert("Bienvenido a mi portafolio! 👋");
 
// =============================================
// 2. Paragraph click — shows/hides extra info
// =============================================
const parrafoSaludo = document.getElementById("parrafo-saludo");
const masInfo = document.getElementById("mas-info");
 
parrafoSaludo.addEventListener("click", function() {
  if (masInfo.style.display === "none" || masInfo.style.display === "") {
    masInfo.style.display = "block";
    parrafoSaludo.innerHTML = 'Gracias por querer saber más sobre mí  <em> Ver menos...</em>';
  } else {
    masInfo.style.display = "none";
    parrafoSaludo.innerHTML = '¡Hola! Soy <strong>Janner de la Hoz</strong>, tengo 25 años y soy profesional en <strong>Administración con énfasis en Mercadeo y Publicidad</strong>. <em>Ver más...</em>';
  }
});
 
// =============================================
// 3. Projects button — shows/hides the list
// =============================================
const btnProyectos = document.getElementById("btn-proyectos");
const listaProyectos = document.getElementById("contenido-proyectos");
 
btnProyectos.addEventListener("click", function() {
  if (listaProyectos.style.display === "none" || listaProyectos.style.display === "") {
    listaProyectos.style.display = "block";
    btnProyectos.textContent = "Ocultar proyectos";
  } else {
    listaProyectos.style.display = "none";
    btnProyectos.textContent = "Proyectos";
  }
});
 
// =============================================
// 4. About me section — shows/hides content
// =============================================
const btnSobreMi = document.getElementById("btn-sobre-mi");
const contenidoSobreMi = document.getElementById("contenido-sobre-mi");
 
btnSobreMi.addEventListener("click", function() {
  if (contenidoSobreMi.style.display === "none" || contenidoSobreMi.style.display === "") {
    contenidoSobreMi.style.display = "block";
    btnSobreMi.textContent = "Ocultar sobre mí";
  } else {
    contenidoSobreMi.style.display = "none";
    btnSobreMi.textContent = "Sobre mí";
  }
});
 
// =============================================
// 5. Contact section — shows/hides form
// =============================================
const btnContacto = document.getElementById("btn-contacto");
const contenidoContacto = document.getElementById("contenido-contacto");
 
btnContacto.addEventListener("click", function() {
  if (contenidoContacto.style.display === "none" || contenidoContacto.style.display === "") {
    contenidoContacto.style.display = "block";
    btnContacto.textContent = "Ocultar contacto";
  } else {
    contenidoContacto.style.display = "none";
    btnContacto.textContent = "Contacto";
  }
});