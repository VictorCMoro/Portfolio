import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Auxiliar de loja',
        p: 'Livrarias Curitiba',
      },
      text: 'Nesse período que trabalhei nas livrarias, adquiri uma visão mais realista do mundo profissional e das atitudes que preciso para conseguir ajudar uma empresa. Tive que ser proativo e trabalhar com muita energia. Ajudei no estoque, reposição de mercadorias, atendimento ao cliente e vendas.',
    },
  ]);
}
