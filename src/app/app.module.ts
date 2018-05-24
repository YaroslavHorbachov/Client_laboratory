import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompetencesModule } from './competences/competences.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderToolbarComponent } from './boilerplate/header-toolbar/header-toolbar.component';
import { PositionsDialogComponent } from './entryComponents/positions/positions-dialog/positions-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BoilerplateModule } from './boilerplate/boilerplate.module';
import { PositionsDialogEditComponent } from './entryComponents/positions/positions-dialog-edit/positions-dialog-edit.component';
import { ManageDialogAddComponent } from './entryComponents/manage/manage-dialog-add/manage-dialog-add.component';
import { ManageDialogEditComponent } from './entryComponents/manage/manage-dialog-edit/manage-dialog-edit.component';
import { CompetenceListEditComponent } from './entryComponents/competence-list/competence-list-dialog-edit/competence-list-dialog-edit.component';
import { CompetenceListAddComponent } from './entryComponents/competence-list/competence-list-dialog-add/competence-list-dialog-add.component';
import { CompetenceGroupAddComponent } from './entryComponents/competence-group/competence-group-add/competence-group-add.component';
import { CompetenceGroupEditComponent } from './entryComponents/competence-group/competence-group-edit/competence-group-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PositionsDialogComponent,
    PositionsDialogEditComponent,
    ManageDialogAddComponent,
    ManageDialogEditComponent,
    CompetenceListEditComponent,
    CompetenceListAddComponent,
    CompetenceGroupAddComponent,
    CompetenceGroupEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UsersModule,
    AuthModule,
    CompetencesModule,
    BrowserModule,
    MaterialModule,
    BoilerplateModule
  ],
  exports: [],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
