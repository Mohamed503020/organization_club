import { Component, OnInit } from '@angular/core';
interface Partnership {
  id: number;
  type: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}
@Component({
  selector: 'app-strategic-partnerships',
  templateUrl: './strategic-partnerships.component.html',
  styleUrl: './strategic-partnerships.component.scss'
})
export class StrategicPartnershipsComponent  implements OnInit{
  categories: any[] = [
    {
      icon: 'bi-globe',
      title: 'Alliances Internationales',
      description: 'Connexion des talents africains aux meilleures opportunités mondiales'
    },
    {
      icon: 'bi-trophy',
      title: 'Écosystème d\'Excellence',
      description: 'Création d\'un réseau solide au service du sport africain'
    },
    {
      icon: 'bi-graph-up',
      title: 'Impact Global',
      description: 'Collaborations significatives pour un développement durable'
    }
  ];

  partner = {
    name: 'AL ETTIFAQ',
    subtitle: 'Football Club',
    description: 'Partenaire de Premier Plan Club emblématique du championnat saoudien, Al-Ettifaq s\'engage aux côtés d\'AFRISPORT Dynamics dans une collaboration stratégique à long terme',
    benefits: [
      'Développement des jeunes talents africains',
      'Formation technique de haut niveau',
      'Échange de compétences',
      'Afrique-Moyen-Orient'
    ],
    conclusion: 'Cette alliance permet de créer un pont stratégique entre l\'expertise du football saoudien et le potentiel immense des talents africains. Elle ouvre des perspectives prometteuses pour le développement du sport.',
    overlayText: 'Le partenariat avec Al-Ettifaq FC représente une opportunité exceptionnelle pour les jeunes talents africains d\'accéder à des infrastructures et des méthodes d\'entraînement de classe mondiale.'
  };

  constructor() { }

  ngOnInit(): void {
    // Add animations on scroll
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    // Use Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      // Observe cards
      const elements = document.querySelectorAll('.strategic-partnerships__card, .strategic-partnerships__partner, .strategic-partnerships__image-container');
      elements.forEach(el => observer.observe(el));
    }
  }
}
