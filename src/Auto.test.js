import ControlAuto from "./Auto";
//import AutoController from "./Auto";
/*describe("Validamos el comando A", () => {
    const auto = new AutoController();
     it("Ingresamos el primer comando A", () => {
      expect(auto.procesarComandos ("")).toEqual("true");
    });
    it("Ingresamos el primer comando A", () => {
      expect(auto.procesarComandos ("")).toEqual("0,0N");
    });
    it("Asignamos la posicion sgt", () => {
      expect(auto.procesarComandos ("1")).toEqual("1");
    });
     it("Asignamos la posicion sgt", () => {
      expect(auto.procesarComandos ("A")).toEqual("0,1N");
    });
  });*/



  describe("Prueba para establecer dimensiones", () => {
    const auto = new ControlAuto();
     it("Establecer dimensiones", () => {
        auto.Dimensiones('5,5');
        expect(auto.MX).toEqual(5);
        expect(auto.MY).toEqual(5);
    });
});
describe("Prueba para establecer posición inicial", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,2N');
        expect(auto.x).toEqual(1);
        expect(auto.y).toEqual(2);
        expect(auto.orientacion).toEqual('N');
    });
});
describe("Prueba para avanzar hacia el oeste", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.Dimensiones('5,5');
        auto.PosicionInicial('2,2W');
        auto.avanzar();
        expect(auto.x).toEqual(1);
        expect(auto.y).toEqual(2);
    });
});