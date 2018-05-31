import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import FormBuilderInit from '../../../models/formBuilder.model';
import { formFields } from '../positions-dialog.form';

@Component({
  selector: 'app-positions-dialog-edit',
  templateUrl: './positions-dialog-edit.component.html',
  styleUrls: ['./positions-dialog-edit.component.css']
})
export class PositionsDialogEditComponent extends FormBuilderInit implements OnInit {

  title: string;
  subtitle: string;
  isUnique: boolean;

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(3)
  ]);

  constructor(
    public dialogRef: MatDialogRef<PositionsDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(FormBuilder) fb: FormBuilder
  ) { super(formFields(), fb); }

  ngOnInit() {
    this.title = this.data.title;
    this.subtitle = this.data.subtitle;
  }

  savePosition(value) {
    setTimeout(() => this.cancelPosition(), 100);
  }

  cancelPosition() {
    this.dialogRef.close();
  }

}
