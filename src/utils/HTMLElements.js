/**
 * Función que recibe un contenedor y obtiene sus limites tales como ancho, alto, etc.
 * @param {Object} container - Referencia del contenedor
 * @returns Objeto con la información
 */
export function getSpecificElementLimits(container) {
  if (!container) {
    throw new Error("Asegúrate de enviar un elemento HTML");
  }

  try {
    return container.getBoundingClientRect();
  } catch (error) {
    throw new Error(
      `No fue posible aplicar el  método getBoundingClientRect() a ${container}, asegúrate de que sea un elemento HTML valido.`
    );
  }
}

/**
 * Función que toma un objeto y obtiene los valores de la propiedad translate3d
 * @param {Object} el - Elemento a obtener su posición 3d XYZ
 */
export function getTranslate3d(el) {
  const values = el.style.transform.split(/\w+\(|\);?/);
  if (!values[1] || !values[1].length) {
    return [];
  }
  return values[1].split(/,\s?/g);
}

/**
 * Función que translada en el eje de las X los slides del carousel
 * @param {Array} carouselSlides - Array con los sliders
 * @param {String } operation - La operacion de suma o resta a aplicar: add or subtract
 * @param {Number} containerCarouselWidth - Ancho del contenedor del carousel
 * @param {Boolean} isClickedByButton - Flag que indica si este evento fue realizado por los botones NEXT Y PREV
 * @param {Array} definedOperations - Operaciones definidas a evaluar, se verifica si el parametro operation está incluido en esta definición
 */
export function translateSlideInX({
  carouselSlides,
  operation,
  containerCarouselWidth,
  isClickedByButton = false,
  definedOperations = ["add", "subtract"]
}) {
  if (!definedOperations.includes(operation)) {
    throw new Error(
      `Las operaciones permitidas son ${definedOperations}. ${operation} no es una opción.`
    );
  }

  const percentage = Math.floor(containerCarouselWidth * 0.35);

  for (let slide of carouselSlides) {
    const [x] = getTranslate3d(slide);
    const [number] = x.split("px");
    const actualPositionInX = Math.floor(Math.abs(Number(number)));
    let translateXValue =
      Number(number) + Math.floor(containerCarouselWidth * 0.02);

    /* if(actualPositionInX !== 0 && actualPositionInX >= percentage) {
      console.log('Alcanzo el 10 porciento');
      break;
    } */

    if (operation === "add") {
      if (isClickedByButton) {
        translateXValue = Number(number) + containerCarouselWidth;
      }
      slide.style.transform = `translate3d(${translateXValue}px, 0px,0px )`;
    }

    if (operation === "subtract") {
      if (isClickedByButton) {
        translateXValue = Number(number) - containerCarouselWidth;
      }
      slide.style.transform = `translate3d(${translateXValue}px, 0px,0px )`;
    }
  }
}
