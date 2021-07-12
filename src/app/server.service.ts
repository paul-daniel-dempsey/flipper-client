import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {
  }

  private async request(method: string, url: string, data?: any) {
    const token = await this.oktaAuth.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getTerm(idterm: any) {
    return this.request('GET', `${environment.serverUrl}/term/${idterm}`);
  }
  getPoolSlot(termid: any) {
    return this.request('GET', `${environment.serverUrl}/poolslot/${termid}`);
  } 
  getClassSlot(idpoolslot: any) {
    return this.request('GET', `${environment.serverUrl}/classslot/${idpoolslot}`);
  }

  
  getSwimmer(idclassslot: any) {
    return this.request('GET', `${environment.serverUrl}/swimmer/${idclassslot}`);
  }
  updateSwimmer(swimmer: any){
    return this.request('PUT', `${environment.serverUrl}/swimmer/${swimmer.idswimmer}`, swimmer);
  }
  createSwimmer(swimmer: any){
    return this.request('POST', `${environment.serverUrl}/swimmer/`, swimmer);  
  }
  deleteSwimmer(swimmer: any){
    return this.request('DELETE', `${environment.serverUrl}/swimmer/${swimmer.idswimmer}`)
  }

  getTerms() {
    return this.request('GET', `${environment.serverUrl}/term`);
  }
  getPoolSlots() {
      return this.request('GET', `${environment.serverUrl}/poolslot`);
  }

  getClassSlots() {
      return this.request('GET', `${environment.serverUrl}/classslot`);
  }
  getSwimmers() {
      return this.request('GET', `${environment.serverUrl}/swimmer`);
  }

//  createEvent(event) {
//    return this.request('POST', `${environment.serverUrl}/term`, event);
//  }

//  updateEvent(event) {
//    return this.request('PUT', `${environment.serverUrl}/term/${event.id}`, event);
//  }

//  deleteEvent(event) {
//    return this.request('DELETE', `${environment.serverUrl}/term/${event.id}`);
//  }
}