import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-positions-dialog',
  templateUrl: './positions-dialog.component.html',
  styleUrls: ['./positions-dialog.component.css']
})
export class PositionsDialogComponent implements OnInit {
  title: string;
  subtitle: string;
  isUnique: boolean;

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(3)
  ]);

  constructor(
    public dialogRef: MatDialogRef<PositionsDialogComponent>,
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
  savePosition() {

    setTimeout(() => this.cancelPosition(), 100);
  }
  cancelPosition() {
    this.dialogRef.close();
  }


}