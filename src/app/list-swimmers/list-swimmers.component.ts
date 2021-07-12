import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-list-swimmers',
  templateUrl: './list-swimmers.component.html',
  styleUrls: ['./list-swimmers.component.css']
})

export class ListComponent_Swimmers implements OnInit {
  
  form: FormGroup;
  modalRef: BsModalRef;

  swimmers: any[] = [];
  currentSwimmer: any = {idswimmer: null, firstname: '', surname: '', adultchild: ''};
  currentClassId: any;
  modalCallback: () => void;

  pageTitle: string = '';
  modalTitle: string = '';

  constructor(private server: ServerService, 
              private fb: FormBuilder,
              private modalService: BsModalService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      idswimmer: [this.currentSwimmer.idswimmer, Validators.required],
      firstname: [this.currentSwimmer.firstname, Validators.required],
      surname: [this.currentSwimmer.surname, Validators.required],
      adultchild: [this.currentSwimmer.adultchild],
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.currentClassId = id;
    const name = String(this.route.snapshot.paramMap.get('name'));
    const idall =  999999999;
    this.getSwimmer(id== null ? idall : id );    
    this.pageTitle += `${name} [IdClass:${(id== null ? 'ALL' : id )}]`;
  }
  

  private getSwimmer(idclass : any) {
    this.server.getSwimmer(idclass).then((response: any) => {
      console.log('Response', response);
      this.swimmers = response.map((ev: { idterm: any;  idpoolslot: any;  idclass: any;  idswimmer: any;  idfamily: any;  title: any; location: any; daytime: any; coach: any; grade: any; descript: any; firstname: any; surname: any; adultchild: any; inclbadge: any; }) => {
        return ev;
      });
    });
  }


  editSwimmer(index: number,template: any) {
    this.modalTitle = `[IdSwimmer:` + String(this.swimmers[index].idswimmer) + `]`;
    this.currentSwimmer = this.swimmers[index];
    this.updateForm();
    this.modalCallback = this.updateSwimmer.bind(this);
    this.modalRef = this.modalService.show(template);
  }
  

  updateForm() {
    this.form.setValue({
      idswimmer: this.currentSwimmer.idswimmer,
      firstname: this.currentSwimmer.firstname,
      surname: this.currentSwimmer.surname,
      adultchild: this.currentSwimmer.adultchild
    });
  }


  updateSwimmer() {
    const swimmerData = {
      idswimmer: this.currentSwimmer.idswimmer,
      firstname: this.form.get('firstname').value,
      surname: this.form.get('surname').value,
      adultchild: this.form.get('adultchild').value,
    };
    this.modalRef.hide();
    this.server.updateSwimmer(swimmerData).then(() => {
      this.getSwimmer(this.currentClassId);
    });
  }


  deleteSwimmer(index) {
    this.server.deleteSwimmer(this.swimmers[index]).then(() => {
      this.getSwimmer(this.currentClassId);
    });
  }


  onCancel() {
    this.modalRef.hide();
  }

  onBack(): void {
    this.router.navigate(['/list-classslot']);
  }
}
