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

export function translateSlideInX(carouselSlides, operation, definedOperations = ['add', 'subtract']) {
  if (!definedOperations.includes(operation)) {
    throw new Error(
      `Las operaciones permitidas son ${definedOperations}. ${operation} no es una opción.`
    );
  }

  for (let slide of carouselSlides) {
    const [x] = getTranslate3d(slide);
    const [number] = x.split("px");

    if (operation === "add") {
      slide.style.transform = `translate3d(${Number(number) + 1}px, 0px,0px )`;
    }

    if (operation === "subtract") {
      slide.style.transform = `translate3d(${Number(number) - 1}px, 0px,0px )`;
    }
  }
}
