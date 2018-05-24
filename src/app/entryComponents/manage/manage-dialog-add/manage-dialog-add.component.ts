import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManageService } from '../../../services/manage.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-dialog-add',
  templateUrl: './manage-dialog-add.component.html',
  styleUrls: ['./manage-dialog-add.component.css']
})
export class ManageDialogAddComponent implements OnInit {
  title: string;
  subtitle: string;
  isUnique: boolean;
  userForm: FormGroup;
  errorValidator: Object = { firstName: {}, lastName: {} };
  positions$: Observable<Array<Object>>;
  requireControl = Validators.required;
  maxLengthControl = Validators.maxLength(25);
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
          this.requireControl,
          this.maxLengthEmailControl
        ]),
        firstName: new FormControl('', [
          this.requireControl,
          this.maxLengthControl
        ]),
        lastName: new FormControl('', [
          this.requireControl,
          this.maxLengthControl
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
  public hasErrorInputs() {
    const { firstName = { errors: '' }, lastName = { errors: '' } } = { ...this.userForm.controls };
    this.errorValidator = {
      ...this.errorValidator,
      ...{ firstName: firstName.errors || {} },
      ...{ lastName: lastName.errors || {} }
    };
  }
  public saveUser() {
    console.log(this.userForm.value);
    setTimeout(() => this.cancel(), 100);
  }
  public cancel() {
    this.dialogRef.close();
  }

}
