// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next EasyDev generation
import { HomeComponent} from './pages/home/home.component';
import { ComuniEditComponent} from './pages/comuni-edit/comuni-edit.component';
import { ComuniListComponent} from './pages/comuni-list/comuni-list.component';
import { RegionEditComponent} from './pages/region-edit/region-edit.component';
import { RegionListComponent} from './pages/region-list/region-list.component';
import { RegionsEditComponent} from './pages/regions-edit/regions-edit.component';
import { RegionsListComponent} from './pages/regions-list/regions-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from "./security/auth.guard";

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },
    
    /* START MY VIEWS */

    { path: 'comunis/:id',  component: ComuniEditComponent , canActivate: [AuthGuard] },
    { path: 'comunis',  component: ComuniListComponent , canActivate: [AuthGuard] },
    { path: 'home',  component: HomeComponent , canActivate: [AuthGuard] },
    { path: 'regions/:id',  component: RegionEditComponent , canActivate: [AuthGuard] },
    { path: 'regions',  component: RegionListComponent , canActivate: [AuthGuard] },
    { path: 'regionses/:id',  component: RegionsEditComponent , canActivate: [AuthGuard] },
    { path: 'regionses',  component: RegionsListComponent , canActivate: [AuthGuard] },

 /* END MY VIEWS */
    
    // SECURITY
    { path: 'manage-users',  component: ManageUserListComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'manage-users/:id',  component: ManageUserEditComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}