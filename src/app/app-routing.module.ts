import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import * as fromCompetences from './competences/competences-routing.module';
import * as fromUsers from './users/users-routing.module';
const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },

    { path: 'home', component: HomeComponent, children: [...fromCompetences.routes, ...fromUsers.routes] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }

