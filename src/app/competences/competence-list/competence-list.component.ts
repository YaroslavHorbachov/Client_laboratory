import { Component, OnInit } from '@angular/core';
import { CompetenceListService } from '../../services/competence-list.service';
import { MatDialog } from '@angular/material';
import { CompetenceListAddComponent } from '../../entryComponents/competence-list/competence-list-dialog-add/competence-list-dialog-add.component';
import { CompetenceListEditComponent } from '../../entryComponents/competence-list/competence-list-dialog-edit/competence-list-dialog-edit.component';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.css']
})
export class CompetenceListComponent implements OnInit {
  head = 'Competence list';

  constructor(
    private _competenceList: CompetenceListService,
    private _competenceListDialog: MatDialog) { }

  ngOnInit() {
  }

  public addCompetence() {
    this._competenceListDialog.open(CompetenceListAddComponent, {
      minWidth: 700,
      minHeight: 500,
      data: {
        title: 'Add New Competence',
        subtitle: ''
      }
    });
  }
  public editCompetence() {
    this._competenceListDialog.open(CompetenceListEditComponent, {
      minWidth: 700,
      minHeight: 500,
      data: {
        title: 'Edit Competence',
        subtitle: ''
      }
    });
  }
}
