import { Component } from '@angular/core';

@Component({
  selector: 'app-reform-partner',
  templateUrl: './reform-partner.component.html',
  styleUrl: './reform-partner.component.scss'
})
export class ReformPartnerComponent {
  title = 'Reform Sports';
  subtitle = 'Partenaire Technique';
  
  facilities = [
    {
      image: '/images/organize/reform-partner_1.PNG',
      description: 'Reform Sports, leader turc dans la construction d\'infrastructures sportives, accompagne AFRISPORT Dynamics dans un ambitieux programme de modernisation des équipements sportifs en Afrique. Cette collaboration stratégique nous permet d\'apporter des solutions techniques innovantes et durables adaptées aux besoins spécifiques du continent.'
    },
    {
      image: '/images/organize/reform-partner_2.PNG',
      description: 'Ensemble, nous développons des terrains synthétiques de dernière génération, des complexes multisports intégrés et des centres de performance de haut niveau. Chaque projet est conçu selon les standards internationaux tout en respectant les particularités locales, créant ainsi les conditions idéales pour l\'émergence de l\'excellence sportive africaine.'
    },
    {
      image: '/images/organize/reform-partner_3.PNG',
      description: 'Ensemble, nous développons des terrains synthétiques de dernière génération, des complexes multisports intégrés et des centres de performance de haut niveau. Chaque projet est conçu selon les standards internationaux tout en respectant les particularités locales, créant ainsi les conditions idéales pour l\'émergence de l\'excellence sportive africaine.'
    }
  ];
}
