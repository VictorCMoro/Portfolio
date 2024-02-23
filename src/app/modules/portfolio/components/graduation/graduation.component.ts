import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-graduation',
  standalone: true,
  imports: [],
  templateUrl: './graduation.component.html',
  styleUrl: './graduation.component.scss',
})
export class GraduationComponent {
  public arrayGraduations = signal([
    {
      summary: {
        strong: 'Sesi Boqueirão',
        p: 'Ensino médio | 2018-2020 ',
      },
      description: 'No ensino médio foi onde a aprendi a trabalhar melhor em equipe e me comunicar melhor.'
    },
    {
      summary: {
        strong: 'PUCPR',
        p: 'Engenharia de software | 2023-2026',
      },
      description: 'No curso de engenharia de software estou aprendendo mais sobre diferentes linguagens de programação, metodologias ágeis, banco de dados e modelagem de processos e software. '
    },
  ]);
}
