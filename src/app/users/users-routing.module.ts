import { Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';

export const routes: Routes = [
    { path: 'manage-users', component: ManageComponent },
    { path: 'evaluations', component: EvaluationsComponent },
];

