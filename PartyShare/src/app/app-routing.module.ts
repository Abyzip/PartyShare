import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent }      from './menu/menu.component';
import { HomeComponent }      from './home/home.component';
import { CategoryComponent }      from './category/category.component';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent }      from './register/register.component';
import { UploadSheetComponent }      from './upload-sheet/upload-sheet.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'category', component: CategoryComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'upload', component: UploadSheetComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}