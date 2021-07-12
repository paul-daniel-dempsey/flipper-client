import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-classslot',
  templateUrl: './list-classslot.component.html',
  styleUrls: ['./list-classslot.component.css']
})
export class ListComponent_Classslot implements OnInit {
  classslots: any[] = [];
  pageTitle: string = '';

  constructor(private server: ServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = String(this.route.snapshot.paramMap.get('name'));
    const idall =  999999999;
    this.getClassSlot(id== null ? idall : id );
    this.pageTitle += `${name} [IdPoolSlot:${(id== null ? 'ALL' : id )}]`;
  }

  private getClassSlot(idpool : any) {
    this.server.getClassSlot(idpool).then((response: any) => {
      console.log('Response', response);
      this.classslots = response.map((ev: { idterm: any;  idpoolslot: any;  idclass: any;  idcoach: any;  title: any; location: any; daytime: any; coach: any; grade: any; descript: any; lifeguard: any; pay_lifeguard: any; }) => {
        return ev;
      });
    });
  }

  onBack(): void {
    this.router.navigate(['/poolslot-list']);
  }
}
