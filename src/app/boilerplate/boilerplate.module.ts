import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { DialogCardComponent } from './dialog-card/dialog-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorControlComponent } from './error-control/error-control.component';
import { PositionDialogComponent } from './position-dialog/position-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderToolbarComponent,
    DialogCardComponent,
    ErrorControlComponent,
    PositionDialogComponent
  ],
  exports: [
    PositionDialogComponent,
    DialogCardComponent,
    HeaderToolbarComponent,
    ErrorControlComponent
  ]
})
export class BoilerplateModule {
}
