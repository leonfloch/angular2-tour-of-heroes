import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';


/**
 * Decorador
 */
@Component({
  moduleId: module.id,
  selector: 'angular2-tour-of-heroes-app',
  templateUrl: 'angular2-tour-of-heroes.component.html',
  styleUrls: ['angular2-tour-of-heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

/**
 * Componente principal de la aplicacion
 */
export class Angular2TourOfHeroesAppComponent implements OnInit {

  //---------------------------------------------------------------------------
  // ATRIBUTOS
  //---------------------------------------------------------------------------
  
  title = 'Tour de Heros';  
  
  /** Heroe seleccionado */
  selectedHero:Hero;

  /**lista de heroes */
  public heroes:Hero[];

  //---------------------------------------------------------------------------
  // METODOS
  //---------------------------------------------------------------------------

  /**
   * Constructor
   */
  constructor(private heroService:HeroService) {

  }

  /**
   * carga la lista de heroes antes de mostrar la vista
   */
  ngOnInit() {
    this.getHeroes();

  }

  /**
   * Carga la lista de heroes
   */
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  /**
   * Hero seleccionado
   */
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}
