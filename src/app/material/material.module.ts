import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,

        MatDialogModule,
        MatGridListModule,
        MatSortModule,
        MatDatepickerModule,
        MatSelectModule,
        MatSnackBarModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatProgressBarModule
    ],
    exports: [
        MatToolbarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatGridListModule,

        MatSortModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatAutocompleteModule
    ],
    declarations: []
})
export class MaterialModule {
}
