import { Component, ViewEncapsulation } from '@angular/core';
interface Slide {
  title: string;
  description: string;
  features: string[];
}
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  slides: Slide[] = [
    {
      title: 'TalentMap - Révélateur de Potentiels',
      description: 'Application innovante développée par AFRISPORT Dynamics pour révolutionner la détection et le suivi des talents sportifs africains.',
      features: ['Détection', 'Suivi progression', 'Valorisation', 'Mise en relation', 'Analytique']
    },
    {
      title: 'Foot4Impact - Le Sport au Service du Changement',
      description: 'Application révolutionnaire développée par AFRISPORT Dynamics pour maximiser et valoriser l\'impact social du football.',
      features: ['Identification des besoins', 'Mise en relation', 'Pilotage de projets', 'Mesure d\'impact']
    }
  ];


}
