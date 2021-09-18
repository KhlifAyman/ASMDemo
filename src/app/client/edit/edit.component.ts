import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  client: Client;
  form: FormGroup;

  constructor(
    public clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idClient'];
    this.clientService.find(this.id).subscribe((data: Client)=>{
      this.client = data;
      console.log(data);
    });

    this.form = new FormGroup({
      nom_prenom:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      code_client:  new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      numero_telephone: new FormControl('', [ Validators.required, Validators.pattern("^[2-5,7,9]{1}[0-9]{7}$") ]),
      adresse: new FormControl('', [ Validators.required, Validators.minLength(10) ]),
      code_postal: new FormControl('', [ Validators.required, Validators.pattern('^[0-9]{4}$')] )
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.clientService.update(this.id, this.form.value).subscribe(res => {
         console.log('Client updated successfully!');
         this.router.navigateByUrl('client/index');
    })
  }

}
