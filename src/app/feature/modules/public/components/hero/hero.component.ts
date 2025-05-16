import { Component, ViewEncapsulation } from '@angular/core';
interface Slide {
  title: string;
  description: string;
  features: string[];
  primaryButton:string
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
      features: ['Détection', 'Suivi progression', 'Valorisation', 'Mise en relation', 'Analytique'],
      primaryButton: 'En savoir plus'
    },
    {
      title: 'Découvrez les talents de demain',
      description: 'Plateforme complète de gestion des talents sportifs africains avec des outils d\'analyse avancés.',
      features: ['Scouting', 'Développement', 'Performance', 'Networking', 'Data Analytics'],
      primaryButton: 'Explorer'
    },
    {
      title: 'Connectez-vous à l\'Afrique sportive',
      description: 'Accédez à un réseau de clubs, académies et fédérations à travers tout le continent africain.',
      features: ['Réseau panafricain', 'Opportunités', 'Partenariats', 'Visibilité', 'Croissance'],
      primaryButton: 'Rejoindre'
    }
  ];


}
