import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './pages/branches/branches.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Branches',component:BranchesComponent},
  {path: 'VaccNow',component:HomeComponent},
  {path: '',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
