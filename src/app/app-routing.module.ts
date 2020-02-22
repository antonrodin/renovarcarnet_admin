import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ManageMarcadoresComponent } from './marcadores/manage-marcadores/manage-marcadores.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  
  // Manage Users
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },

  // Manage Marcadores
  { path: 'marcadores', component: ManageMarcadoresComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
