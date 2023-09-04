import AutoController from "./Auto";
describe("Validamos el comando A", () => {
    const auto = new AutoController();
    it("Asignamos la posicion sgt", () => {
      expect(auto.procesarComandos ("A")).toEqual("0,1N");
    });
  });