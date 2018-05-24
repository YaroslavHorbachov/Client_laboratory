import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { MaterialModule } from '../material/material.module';
import { HeaderToolbarComponent } from '../boilerplate/header-toolbar/header-toolbar.component';
import { BoilerplateModule } from '../boilerplate/boilerplate.module';
import { EvaluationsService } from '../services/evaluations.service';
import { ManageService } from '../services/manage.service';
import { ManageDialogAddComponent } from '../entryComponents/manage/manage-dialog-add/manage-dialog-add.component';
import { ManageDialogEditComponent } from '../entryComponents/manage/manage-dialog-edit/manage-dialog-edit.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    BoilerplateModule
  ],
  declarations: [ManageComponent, EvaluationsComponent],
  entryComponents: [
    HeaderToolbarComponent,
    ManageDialogAddComponent,
    ManageDialogEditComponent],
  providers: [EvaluationsService, ManageService]
})
export class UsersModule { }
