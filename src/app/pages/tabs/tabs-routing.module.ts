import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
      },
      {
        path: 'option',
        loadChildren: () => import('./option/option.module').then( m => m.OptionPageModule)
      }
    ]
    
  },
  {
    path: 'floor',
    loadChildren: () => import('./floor/floor.module').then( m => m.FloorPageModule)
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then( m => m.FacilitiesPageModule)
  },
  {
    path: 'lecturer',
    loadChildren: () => import('./lecturer/lecturer.module').then( m => m.LecturerPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
