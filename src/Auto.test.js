import AutoController from "./Auto";
describe("Validamos el comando A", () => {
    const auto = new AutoController();
    it("Ingresamos el primer comando A", () => {
      expect(auto.procesarComandos ("")).toEqual(true);
    });
  });