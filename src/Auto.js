class ControlAuto {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.MX = 0;
        this.MY = 0;
        this.orientacion = '';
      }
    // Implementación de la función establecerDimensiones
establecerDimensiones(dimensiones) {
    const [MX , MY ] = dimensiones.split(',').map(Number);
    this.MX  = MX ;
    this.MY = MY;
  }
  
    
}
export default ControlAuto;