class TwiceAsOld {
    constructor(dadYearsOld, sonYearsOld) {
        this.hijoHoy = sonYearsOld;
        this.padreInicio = dadYearsOld - sonYearsOld;
        this.hijoInicio = 0;
    }

    mismaEdad = () => {
        let i = 0;
        let p = this.padreInicio;
        let h = this.hijoInicio;
        while (i < 200) {
            i++;
            p++;
            h++;
            if(p === h * 2) return h;
        }
    }

    cuando = () => {
        return this.mismaEdad() < this.hijoHoy ? 
        `Hace ${this.hijoHoy - this.mismaEdad()} años  el padre tenia el doble de la edad del hijo.` :
        `En ${this.mismaEdad() - this.hijoHoy} años el padre tendra el doble de la edad del hijo.`;
    }
   
}

let prueba = new TwiceAsOld(40, 5);
console.log(prueba.cuando());
