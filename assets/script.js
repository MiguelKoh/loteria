

const imprimirCartas = async () => {
  
  try {
    const wrapper = document.querySelector(".swiper-wrapper");
    const respuestaCartas = await fetch("./obtenerCarta.php");
    const cartas = await respuestaCartas.json();
    let card = '';
  
   cartas.forEach(carta => {
    card += `<div class="swiper-slide">
               <img src="imagenes_optimizadas/cartas/${carta.rutaImagen}" loading="lazy">
               <audio id="audio${carta.id}" src="audios-loteria/${carta.rutaAudio}"></audio>
             </div>`;
  });

  wrapper.innerHTML = card;
  
  } catch (error) {
    console.error(error);
  }
  
}

document.addEventListener("DOMContentLoaded", imprimirCartas);

