import { Routes } from '@angular/router';
import { CompetenceGroupsComponent } from './competence-groups/competence-groups.component';
import { CompetenceListComponent } from './competence-list/competence-list.component';
import { LevelMatrixComponent } from './level-matrix/level-matrix.component';
import { PositionsComponent } from './positions/positions.component';

export const routes: Routes = [
  { path: 'competence-groups', component: CompetenceGroupsComponent },
  { path: 'competence-list', component: CompetenceListComponent },
  { path: 'level-matrix', component: LevelMatrixComponent },
  { path: 'positions', component: PositionsComponent }
];
