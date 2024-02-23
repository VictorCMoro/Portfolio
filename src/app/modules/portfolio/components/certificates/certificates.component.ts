import { Component, inject, signal } from '@angular/core';
import { ICertificates } from '../../interface/ICertificates';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogCertificatesComponent } from '../dialog/dialog-certificates/dialog-certificates.component';
import { EProjects } from '../../enum/EProjects';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  #dialog = inject(MatDialog)

  public arrayCertificates = signal<ICertificates[]>([
    {
      buttonSrc: 'assets/icons/certificatesIcons/css3.svg',
      src: 'assets/icons/certificatesIcons/prints/cssPrint.png',
      alt: 'Certificado css',
      title: 'Certificado CSS',
      description: 'Certificado CSS pela plataforma OneBitCode',
      links: [{ name:'Baixar certificado' ,certificateHref: 'assets/pdf/certificadoCSS.pdf ' }]
    },
    {
      buttonSrc: 'assets/icons/certificatesIcons/html.svg',
      src: 'assets/icons/certificatesIcons/prints/htmlPrint.png',
      alt: 'Certificado html',
      title: 'Certificado HTML',
      description: 'Certificado HTML5 pela plataforma OneBitCode',
      links: [{ name:'Baixar certificado' ,certificateHref: 'assets/pdf/certificadoHTML.pdf ' }]
    },
    {
      buttonSrc: 'assets/icons/certificatesIcons/javascript.svg',
      src: 'assets/icons/certificatesIcons/prints/javascriptPrint.png',
      alt: 'Certificado javascript',
      title: 'Certificado Javascript',
      description: 'Certificado Javascript pela plataforma OneBitCode',
      links: [{ name:'Baixar certificado' ,certificateHref: 'assets/pdf/certificadoJavascript.pdf' }]
    },
    {
      buttonSrc: 'assets/icons/certificatesIcons/typescript.svg',
      src: 'assets/icons/certificatesIcons/prints/typescriptPrint.png',
      alt: 'Certificado typescript',
      title: 'Certificado Typescript',
      description: 'Certificado Typescript pela plataforma OneBitCode',
      links: [{ name:'Baixar certificado' ,certificateHref: 'assets/pdf/certificadoTypescript.pdf' }]
    },
    {
      buttonSrc: 'assets/icons/certificatesIcons/git.svg',
      src: 'assets/icons/certificatesIcons/prints/gitPrint.png',
      alt: 'Certificado GIT',
      title: 'Certificado GIT e GitHub',
      description: 'Certificado Git e GitHub pela plataforma OneBitCode',
      links: [{ name:'Baixar certificado' ,certificateHref: 'assets/pdf/certificadoGITeGitHub.pdf' }]
    },
  ]);

  public openDialog(data: ICertificates){
    this.#dialog.open(DialogCertificatesComponent,{
      data,
      panelClass: EProjects.PROJECTS
    })
  }
}
