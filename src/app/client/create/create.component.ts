import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {

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
    this.clientService.create(this.form.value).subscribe(res => {
         console.log('Le client a été bien ajouté!');
         this.router.navigateByUrl('client/index');
    })
  }

}
