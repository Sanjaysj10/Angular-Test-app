import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grid',
    loadComponent: () => import('./components/ag-grid/ag-grid.component').then((x) => x.AgGridComponent)
  },
  {
    path: '**',
    redirectTo: 'grid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
