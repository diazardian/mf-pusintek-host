import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'test',
    loadChildren: () => import('pusintek-mfe/Module').then(m => m.MainModule)
  },
  
  {
    path: 'test2',
    loadChildren: () => import('pusintek-mfe2/Module').then(m => m.MainModule)
  }
];
