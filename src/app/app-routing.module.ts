import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminFilesComponent }from './admin-files/admin-files.component';
import{ PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    // admin转发到这个AdminFilesComponent
    path: 'admin', component: AdminFilesComponent,
    // children代表是admin的子项,即如果找到admin-files应该怎么样
    children: [
      { path: 'files', component: AdminFilesComponent },
    ]
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  // 不是完全匹配的情况,则转发到PageNotFoundComponent页面
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
