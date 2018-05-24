import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenceListComponent } from './competence-list/competence-list.component';
import { LevelMatrixComponent } from './level-matrix/level-matrix.component';
import { PositionsComponent } from './positions/positions.component';
import { MaterialModule } from '../material/material.module';
import { CompetenceGroupsComponent } from './competence-groups/competence-groups.component';
import { HeaderToolbarComponent } from '../boilerplate/header-toolbar/header-toolbar.component';
import { BoilerplateModule } from '../boilerplate/boilerplate.module';
import { PositionsDialogComponent } from '../entryComponents/positions/positions-dialog/positions-dialog.component';
import { PositionsService } from '../services/positions.service';
import { LevelMatrixService } from '../services/level-matrix.service';
import { CompetenceListService } from '../services/competence-list.service';
import { CompetenceGroupsService } from '../services/competence-groups.service';
import { PositionsDialogEditComponent } from '../entryComponents/positions/positions-dialog-edit/positions-dialog-edit.component';
import { CompetenceListAddComponent } from '../entryComponents/competence-list/competence-list-dialog-add/competence-list-dialog-add.component';
import { CompetenceGroupEditComponent } from '../entryComponents/competence-group/competence-group-edit/competence-group-edit.component';
import { CompetenceGroupAddComponent } from '../entryComponents/competence-group/competence-group-add/competence-group-add.component';
import { CompetenceListEditComponent } from '../entryComponents/competence-list/competence-list-dialog-edit/competence-list-dialog-edit.component';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    BoilerplateModule
  ],
  declarations: [
    CompetenceGroupsComponent,
    CompetenceListComponent,
    LevelMatrixComponent,
    PositionsComponent
  ],
  providers: [PositionsService, LevelMatrixService, CompetenceListService, CompetenceGroupsService],
  entryComponents: [
    PositionsDialogComponent,
    PositionsDialogEditComponent,
    CompetenceListAddComponent,
    CompetenceListEditComponent,
    CompetenceGroupEditComponent,
    CompetenceGroupAddComponent
  ]
})
export class CompetencesModule { }
