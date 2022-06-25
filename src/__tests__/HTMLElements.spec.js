import { describe, it, vi, expect } from "vitest";

import { getSpecificElementLimits } from "../utils/HTMLElements";

describe("getSpecificElementLimits()", () => {
  it("should throw an error when not argument is provided", () => {
    const resultFn = () => getSpecificElementLimits();
    expect(resultFn).toThrowError();
  });

  it("should throw an error when can't call getBoundingClientRect method when a value is provided", () => {
    const element = {
        // para que pueda ejecutar el método le falta la T
        getBoundingClientRec() {
            console.log('Hello World');
        }
    }

    const resultFn = () => getSpecificElementLimits(element);
    expect(resultFn).toThrowError(/No fue posible aplicar el  método getBoundingClientRect()/);
  });

  it("should returns an object when a valid argument is provided", () => {

    //TODO: UTILIZAR JSDOM O HAPPYDOM PARA CREAR UN ELEMENTO HTML Y ENVIARSELO
   

    const result = getSpecificElementLimits(element);

    console.log({result});
    console.log('aAAAAAAAA');
    expect(true);
  });
});

describe.todo("getTranslate3d()");

describe.todo("translateSlideInX()");
