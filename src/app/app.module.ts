import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxTimelineModule } from 'ngx-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { Term_ListComponent } from './list-term/term-list.component';
import { Poolslot_ListComponent } from './list-poolslot/poolslot-list.component';
import { ListComponent_Classslot } from './list-classslot/list-classslot.component';
import { ListComponent_Swimmers } from './list-swimmers/list-swimmers.component';
import { RouterModule } from '@angular/router';

const oktaConfig = {
  issuer: 'https://dev-04412034.okta.com/oauth2/default',
  clientId: '0oarqpapoxCdjqdkh5d6',
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Term_ListComponent,
    Poolslot_ListComponent,
    ListComponent_Classslot,
    ListComponent_Swimmers
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxTimelineModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {path: 'term-list', component:Term_ListComponent},
      {path: 'term-list/:id', component:Term_ListComponent},
      {path: 'poolslot-list', component:Poolslot_ListComponent },
      {path: 'poolslot-list/:id', component:Poolslot_ListComponent},
      {path: 'poolslot-list/:id/:name', component:Poolslot_ListComponent},
      {path: 'list-classslot', component:ListComponent_Classslot },
      {path: 'list-classslot/:id', component:ListComponent_Classslot},
      {path: 'list-classslot/:id/:name', component:ListComponent_Classslot},
      {path: 'list-swimmers', component:ListComponent_Swimmers },
      {path: 'list-swimmers/:id', component:ListComponent_Swimmers},
      {path: 'list-swimmers/:id/:name', component:ListComponent_Swimmers},
    ]),
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
