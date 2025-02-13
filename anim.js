//sincronizar las letras con la cancion
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Nunca digas que te vas sin querer regresar", time: 15 },
    { text: "Cuando, de ti, me enamoré", time: 18 },
    { text: "Cuando, cien años, ya te amé", time: 27 },
    { text: "Llévame siempre al recordar", time: 32 },
    { text: "Viéndote bailar en aquel cerro Coronel", time: 33 },
    { text: "Y ya, mil veces, te besé", time: 41 },
    { text: "Y, no lo niego, me clavé", time: 47 },
    { text: "Llévame siempre al recordar", time: 54 },
    { text: "Te he visto en frente, sonriente, valiente, te quiero tanto", time: 59 },
    { text: "Vestido blanco, en el medio tu alma, te quiero tanto", time: 67 },
    { text: "Me duele fuerte pensar que algún día te encuentre ausente", time: 72 },
    { text: "Me duele fuerte pensar que algún día te encuentre ausente", time: 78 },
    { text: "Te siento al cantar y al escuchar cualquier canción", time: 83 },
    { text: "Bonita que hable del amor, de lo que siento ayer y hoy", time: 91 },
    { text: "Siempre te llevo al despertar", time: 97 },
    { text: "Te vi a los ojos bien", time: 104 },
    { text: "Sentí cariño fiel Si me rompiera aquí Esperaría por ti", time: 108 },
    { text: "Te he visto en frente, sonriente, valiente, te quiero tanto", time: 144 },
    { text: "Vestido blanco, en el medio tu alma, te quiero tanto", time: 148 },
    { text: "Me duele fuerte pensar que algún día te encuentre ausente", time: 153 },
    { text: "Me duele fuerte pensar que algún día te encuentre ausente", time: 158 },
    { text: "te vi a los ojos bien ", time: 164 },
    { text: "Senti cariño fiel", time: 169 },
    { text: "Si me rompiera aquí", time: 176 },
    { text: "Esperaría por ti", time: 183 },
    { text: "In the mood for the flowers", time: 188 },
    { text: "Love.", time: 140 },
  ];

  // Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
      (line) => time >= line.time && time < line.time + 6
    );
  
    if (currentLine) {
      // Calcula la opacidad basada en el tiempo en la línea actual
      var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
      var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
  
      // Aplica el efecto de aparición
      lyrics.style.opacity = opacity;
      lyrics.innerHTML = currentLine.text;
    } else {
      // Restablece la opacidad y el contenido si no hay una línea actual
      lyrics.style.opacity = 0;
      lyrics.innerHTML = "";
    }
  }
  
  setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);