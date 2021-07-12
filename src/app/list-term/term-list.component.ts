import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css']
})
export class Term_ListComponent implements OnInit {
  terms: any[] = [];
  pageTitle: string = 'term-list';

  constructor(private server: ServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const idall =  999999999;
    this.getTerm(id== 0 ? idall : id );
    this.pageTitle += `: ${(id== 0 ? 'ALL' : id )}`;
  }

  private getTerm(idterm : any)  {
    this.server.getTerm(idterm).then((response: any) => {
      console.log('Response', response);
      this.terms = response.map((ev: { title: any; year: any; season: any; weekcount: any; date_start: any; date_end: any; halfterm_start: any; halfterm_end: any; idterm: any; }) => {
        return ev;
      });
    });
  }
}
// title, year,  season: any; weekcount: any; date_start: any; date_end: any; halfterm_start: any; halfterm_end: any; idterm: any;