class ControlAuto {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.MX = 0;
        this.MY = 0;
        this.orientacion = '';
      }
    // Implementación de la función establecerDimensiones
 Dimensiones(dimensiones) {
    const [MX , MY ] = dimensiones.split(',').map(Number);
    this.MX  = MX ;
    this.MY = MY;
  }
  PosicionInicial(Inicio) {
    const [x, y, direccion] = Inicio.match(/^(\d+),(\d+)([NSEW])$/).slice(1);
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.orientacion = direccion;
}
// Implementación del método avanzar
avanzar() {
    switch (this.orientacion) {
       case 'W':
        if (this.x > 0) this.x--;
        break; 
        case 'E':
        if (this.x < this.MX) this.x++;
        break; 
        case 'N':
        if (this.y < this.MY) this.y++;
        break; 

    }
  }

  
    
}
export default ControlAuto;