import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

/**
 * Servicio que obtiene los heroes
 */
@Injectable()
export class HeroService {

  constructor() { }

  /**
   * retorna la lista de heroes
   */
  getHeroes() {
    return Promise.resolve(HEROES);

  }

  /**
   * Metodo de pruebas
   * retorna los heroes de forma lenta
   */
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }

}
