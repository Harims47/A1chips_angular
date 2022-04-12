import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

  },
  {
    path: 'category',
    component: CategoryComponent,

  },
  {
    path: 'menu',
    component: MenuComponent,

  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,

  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
