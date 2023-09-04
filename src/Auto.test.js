import AutoController from "./Auto";
describe("Validamos el comando A", () => {
    const auto = new AutoController();
    it("Asignamos la posicion sgt", () => {
      expect(auto.procesarComandos ("1")).toEqual("1");
    });
  });