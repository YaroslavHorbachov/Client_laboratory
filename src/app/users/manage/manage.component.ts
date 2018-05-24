import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../services/manage.service';
import { MatDialog } from '@angular/material';
import { ManageDialogAddComponent } from '../../entryComponents/manage/manage-dialog-add/manage-dialog-add.component';
import { ManageDialogEditComponent } from '../../entryComponents/manage/manage-dialog-edit/manage-dialog-edit.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  head = 'Manage Users';
  constructor(
    private _manage: ManageService,
    private _manageDialog: MatDialog) { }

  ngOnInit() {
  }

  public addUser() {
    this._manageDialog.open(ManageDialogAddComponent, {
      minWidth: 700,
      minHeight: 500,
      data: {
        title: 'Add New Position',
        subtitle: ''
      }
    });
  }
  /* SEND DATA ABOUT USER  */
  public editUser() {
    this._manageDialog.open(ManageDialogEditComponent, {
      minWidth: 700,
      minHeight: 500,
      data: {
        title: 'Edit User',
        subtitle: ''
      }
    });
  }
}
