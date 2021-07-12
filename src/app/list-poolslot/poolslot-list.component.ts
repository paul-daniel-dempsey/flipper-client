import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poolslot-list',
  templateUrl: './poolslot-list.component.html',
  styleUrls: ['./poolslot-list.component.css']
})
export class Poolslot_ListComponent implements OnInit {
  poolslots: any[] = [];
  pageTitle: string = '';

  constructor(private server: ServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = String(this.route.snapshot.paramMap.get('name'));
    const idall =  999999999;
    this.pageTitle += `${name} [IdTerm:${(id== null ? 'ALL' : id )}]`;
    this.getPoolSlot(id== null ? idall : id );
  }

  private getPoolSlot(idterm: number) {
    this.server.getPoolSlot(idterm).then((response: any) => {
      console.log('Response', response);
      this.poolslots = response.map((ev: { idterm: any;  idpoolslot: any;  title: any; location: any; daytime: any; capacity: any; lifeguard: any; pay_lifeguard: any; }) => {
        return ev;
      });
    });
  }

  onBack(): void {
    this.router.navigate(['/list-term']);
  }
}
