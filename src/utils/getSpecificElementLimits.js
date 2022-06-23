export function getSpecificElementLimits(container) {
  if (!container) {
    throw new Error("Asegúrate de enviar un elemento HTML");
  }

  try {
    return container.getBoundingClientRect();
  } catch (error) {
    throw new Error(`No fue posible aplicar el  método getBoundingClientRect() a ${container}, asegúrate de que sea un elemento HTML valido.`);
  }
}
