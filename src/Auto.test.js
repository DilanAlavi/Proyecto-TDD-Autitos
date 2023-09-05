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
describe("Prueba para avanzar hacia el este", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.Dimensiones('5,5');
        auto.PosicionInicial('2,2E');
        auto.avanzar();
        expect(auto.x).toEqual(3);
        expect(auto.y).toEqual(2);
    });
});
describe("Prueba para avanzar hacia el Norte", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.Dimensiones('5,5');
        auto.PosicionInicial('2,2N');
        auto.avanzar();
        expect(auto.x).toEqual(2);
        expect(auto.y).toEqual(3);
    });
});
describe("Prueba para avanzar hacia el Sud", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.Dimensiones('5,5');
        auto.PosicionInicial('2,2S');
        auto.avanzar();
        expect(auto.x).toEqual(2);
        expect(auto.y).toEqual(1);
    });
});
describe("Prueba para girar a la izquierda desde el Oeste", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1W');
        auto.girarIzquierda();
       expect(auto.orientacion).toEqual('S');
    });
});
describe("Prueba para girar a la izquierda desde el Este", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1E');
        auto.girarIzquierda();
       expect(auto.orientacion).toEqual('N');
    });
});
describe("Prueba para girar a la izquierda desde el Norte", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1N');
        auto.girarIzquierda();
       expect(auto.orientacion).toEqual('W');
    });
});
describe("Prueba para girar a la izquierda desde el Sud", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1S');
        auto.girarIzquierda();
       expect(auto.orientacion).toEqual('E');
    });
});
describe("Prueba para girar a la derecha desde el Oeste", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1W');
        auto.girarDerecha();
       expect(auto.orientacion).toEqual('N');
    });
});
describe("Prueba para girar a la derecha desde el Este", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1E');
        auto.girarDerecha();
       expect(auto.orientacion).toEqual('S');
    });
});
describe("Prueba para girar a la derecha desde el Norte", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1N');
        auto.girarDerecha();
       expect(auto.orientacion).toEqual('E');
    });
});
describe("Prueba para girar a la derecha desde el Sud", () => {
    const auto = new ControlAuto();
     it("Establecer posición inicial", () => {
        auto.PosicionInicial('1,1S');
        auto.girarDerecha();
       expect(auto.orientacion).toEqual('W');
    });
});
test('Método Comando', () => {
    const auto = new ControlAuto();
    const comandos = '5,5/1,2N/IAIAIAIAA';
    const resultado = auto.Comando(comandos);
  
    // Verificar que las dimensiones se establecieron correctamente
    expect(auto.MX).toEqual(5);
    expect(auto.MY).toEqual(5);
  
    // Verificar que la posición inicial se estableció correctamente
    expect(auto.x).toEqual(1);
    expect(auto.y).toEqual(3);
    expect(auto.orientacion).toEqual('N');
  
    // Verificar que el resultado coincide con la posición y orientación esperadas
    expect(resultado).toEqual('1,3 N');
  });