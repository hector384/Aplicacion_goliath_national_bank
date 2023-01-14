import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  NewCustomerForm = new FormGroup({

    name_Client: new FormControl('', Validators.required),
    lastNameClient: new FormControl('', Validators.required),
    number_Identification: new FormControl('', Validators.required),
    email_Client: new FormControl('', Validators.email),
    client_bornDate: new FormControl('', Validators.required),
    client_Direction: new FormControl('', Validators.required),
    tipeIdentification: new FormControl('', Validators.required),
    creationDate: new FormControl('5', Validators.required),

  });


  constructor(
    private clientService: ClientsService,
    private router: Router,

  ) {

  }
  ngOnInit(): void {

  }
  age!: number;
  showAge!: number;


  onSaveNewCustomer(form: any,) {
    const convertAge = new Date(form.client_bornDate);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    console.log(this.showAge)

    if (form.name_Client && form.tipeIdentification && form.lastNameClient &&
      form.email_Client && form.client_Direction && form.number_Identification == " "
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar todos los campos!',
      })

    } else if (this.showAge < 18) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario no puede ser menor de edad!',
      })
    }
    else {
      this.clientService.createCustomer(form)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/table-customer'])
        })
    }
    console.log(form.name_Client);
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  selectFormControl = new FormControl('', Validators.required);
  matcher = new MyErrorStateMatcher();

}

