import { Injectable } from "@angular/core";
import { Personaje } from "../intefaces/dbz.interface";

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000
    },
    {
      nombre: 'Vegeta',
      poder: 18000
    }
  ];

  get personajes() {
    return [...this._personajes];
  }

  constructor() { }

  agegarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

}