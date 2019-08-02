import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '@class';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

constructor() { }
createDb() {
  const heroes = [
    { id: 21, name: 'Dr Nice' },
    { id: 22, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  const shipping=[
    {
      "type": "Overnight",
      "price": 25.21
    },
    {
      "type": "2-Day",
      "price": 9.99
    },
    {
      "type": "Postal",
      "price": 2.99
    }
  ]
  return {heroes ,shipping};
}
genId(heroes: Hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}
}
