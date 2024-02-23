import { Component, Inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ICertificates } from '../../../interface/ICertificates';

@Component({
  selector: 'app-dialog-certificates',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-certificates.component.html',
  styleUrl: './dialog-certificates.component.scss',
})
export class DialogCertificatesComponent {
  constructor(
    private _dialogref: MatDialogRef<DialogCertificatesComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: ICertificates
  ) {}

  public getData = signal<ICertificates | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogref.close();
  }
}
