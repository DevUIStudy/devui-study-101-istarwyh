import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminFilesComponent }from './admin-files/admin-files.component';
import{ PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminFilesComponent,
    children: [
      { path: 'files', component: AdminFilesComponent },
    ]
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
