// Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.

// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

// Cambia solo el código debajo de esta línea
class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }

    get temperature() {
      let celsius = 5 / 9 * (this._fahrenheit - 32);
      return celsius;
    }

    set temperature(celsius) {
      let fahrenheit = celsius * 9.0 / 5 + 32;
      this._fahrenheit = fahrenheit;
    }

}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius
console.log(temp);