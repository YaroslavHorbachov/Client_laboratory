import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-positions-dialog-edit',
  templateUrl: './positions-dialog-edit.component.html',
  styleUrls: ['./positions-dialog-edit.component.css']
})
export class PositionsDialogEditComponent implements OnInit {

  title: string;
  subtitle: string;
  isUnique: boolean;

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(3)
  ]);

  constructor(
    public dialogRef: MatDialogRef<PositionsDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.subtitle = this.data.subtitle;
  }

  checkUnique(value) {
    console.log(this.nameFormControl);
    return true;
  }

  savePosition(value) {

    setTimeout(() => this.cancelPosition(), 100);
  }

  cancelPosition() {
    this.dialogRef.close();
  }

}
