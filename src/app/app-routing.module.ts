import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Term_ListComponent } from './list-term/term-list.component';
import { Poolslot_ListComponent } from './list-poolslot/poolslot-list.component';
import { ListComponent_Classslot } from './list-classslot/list-classslot.component';
import { ListComponent_Swimmers } from './list-swimmers/list-swimmers.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'term-list',
    component: Term_ListComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'poolslot-list',
    component: Poolslot_ListComponent,
    canActivate: [OktaAuthGuard]
  },  
  {
    path: 'list-classslot',
    component: ListComponent_Classslot,
    canActivate: [OktaAuthGuard]
  },  
  {
    path: 'list-swimmers',
    component: ListComponent_Swimmers,
    canActivate: [OktaAuthGuard]
  },  
  { path: 'callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
