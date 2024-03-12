import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjetcs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EProjects } from '../../enum/EProjects';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'https://victorcmoro.github.io/Portfolio/assets/img/projects/stack-of-books.png',
      alt: 'ícone de livros para o projeto',
      title: 'CRUD Livraria',
      width: '100px',
      height: '100px',
      description:
        'Neste projeto fiz um CRUD com Angular(FrontEnd) e .NET(BackEnd), em que é possível cadastrar um livro, ver este livro no banco de dados (MySql) e na aplicação web, além das funções de cadastrar e listar o que foi cadastrado, podemos editar e deletar os livros, autores e áreas de conhecimento de livros. Competências: Banco de dados · Interface de programação de aplicativos (API) · Entity Framework · MySQL · .NET Framework · AngularJS · C#',
      links: [{ name: 'Repositório FrontEnd ', href: 'https://github.com/VictorCMoro/CRUDAngular', nameGit: 'Repositório BackEnd', gitHref: 'https://github.com/VictorCMoro/CRUDApi'}],
    },
    {
      src: 'https://victorcmoro.github.io/Portfolio/assets/img/projects/ready-stock (2).png',
      alt: 'ícone de estoque para o projeto',
      title: 'Gestor de estoque',
      width: '100px',
      height: '100px',
      description: 'Este projeto é uma aplicação de página única (SPA) de gestão de estoque desenvolvida com React, React Router e Vite. Competências: Desenvolvimento de front-end · React.js · JavaScript',
      links: [{ name: 'Testar projeto', href: 'https://victorcmoro.github.io/Gestor_de_Estoque/', nameGit: 'Repositório', gitHref: 'https://github.com/VictorCMoro/Gestor_de_Estoque' }],
    },
    {
      src: 'https://victorcmoro.github.io/Portfolio/assets/img/projects/icons8-pokebola-96.png',
      alt: 'ícone  para o projeto',
      title: 'Pokedex',
      width: '100px',
      height: '100px',
      description: 'Este projeto é uma aplicação que desenvolvi para treinar o consumo de API e display da mesma, onde podemos ver todos os pokemons e pesquisar algum específico, e ver suas estatísticas',
      links: [{ name: 'Testar projeto', href: 'https://victorcmoro.github.io/pokedexAngular/', nameGit: 'Repositório', gitHref: 'https://github.com/VictorCMoro/pokedexAngular' }],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EProjects.PROJECTS,
    });
  }
}
