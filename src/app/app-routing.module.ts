import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/userlist/user.component';
import { AuthGuard } from './core/authgaurd/auth.gaurds';
import { layoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: '',canActivate: [AuthGuard],
    component: layoutComponent,
  },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'user', canActivate: [AuthGuard], component: UserListComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }