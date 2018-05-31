import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PositionsService } from '../../../services/positions.service';
import FormBuilderInit from '../../../models/formBuilder.model';
import { formFields } from '../positions-dialog.form';

@Component({
  selector: 'app-positions-dialog',
  templateUrl: './positions-dialog.component.html',
  styleUrls: ['./positions-dialog.component.css']
})
export class PositionsDialogComponent extends FormBuilderInit implements OnInit {
  title: string;
  subtitle: string;
  isUnique: boolean;
  name: any;
  constructor(
    private _positions: PositionsService,
    public dialogRef: MatDialogRef<PositionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(FormBuilder) fb: FormBuilder) {
    super(formFields(), fb);
  }

  ngOnInit() {
    this.title = this.data.title;
    this.subtitle = this.data.subtitle;
  }

  public async savePosition() {
    const response = this.form.valid && await this._positions.savePositionRequest(this.form.value).toPromise();
    setTimeout(() => this.cancelPosition(), 100);
  }
  public cancelPosition() {
    this.dialogRef.close();
  }

}

