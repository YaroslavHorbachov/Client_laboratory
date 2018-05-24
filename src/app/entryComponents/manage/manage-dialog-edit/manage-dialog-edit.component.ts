import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ManageService } from '../../../services/manage.service';
import { ManageDialogAddComponent } from '../manage-dialog-add/manage-dialog-add.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-dialog-edit',
  templateUrl: './manage-dialog-edit.component.html',
  styleUrls: ['./manage-dialog-edit.component.css']
})
export class ManageDialogEditComponent implements OnInit {

  title: string;
  subtitle: string;
  isUnique: boolean;
  userForm: FormGroup;
  positions$: Observable<Array<Object>>;
  requireControl = Validators.required;

  maxLengthEmailControl = Validators.maxLength(40);

  constructor(
    public dialogRef: MatDialogRef<ManageDialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _manage: ManageService) {
  }

  ngOnInit() {
    this.createForm();
    this.positions$ = this._manage.getPositions();
    this.title = this.data.title;
    this.subtitle = this.data.subtitle;
  }


  private createForm() {
    this.userForm = new FormGroup(
      {
        email: new FormControl('', [
          this.requireControl
        ]),
        firstName: new FormControl('', [
          this.requireControl
        ]),
        lastName: new FormControl('', [
          this.requireControl
        ]),
        position: new FormControl('', [
          this.requireControl
        ])
      }
    );
  }
  public checkUnique(value) {
    console.log(value);
    return Boolean(value);
  }

  public saveUser() {
    console.log(this.userForm.value);
    setTimeout(() => this.cancel(), 100);
  }
  public cancel() {
    this.dialogRef.close();
  }

}
