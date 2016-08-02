import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

/**
 * Decorador
 */
@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})

/**
 * Componente del detalle de un heroe
 */
export class HeroDetailComponent {

  @Input()
  hero:Hero;

  

}
