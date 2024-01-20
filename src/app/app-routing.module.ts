import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenEmailComponent } from './gen-email/gen-email.component';
import { MainComponent } from './core/main/main.component';
import { AboutComponent } from './core/about/about.component';
import { ServicesComponent } from './core/services/services.component';

const routes: Routes = [
  {
    path: 'gen-email',
    component: GenEmailComponent
  },
  {
    path: 'core/gen-email',
    component: GenEmailComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'core/main',
    component: MainComponent
  },
  {
    path: 'core/services',
    component: ServicesComponent
  },
  {
    path:'core/about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
