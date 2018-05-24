import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { DialogCardComponent } from './dialog-card/dialog-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    HeaderToolbarComponent,
    DialogCardComponent
  ],
  exports: [
    DialogCardComponent,
    HeaderToolbarComponent
  ]
})
export class BoilerplateModule {
}
