import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/modelo/Customer';

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
  /* NewCustomerForm = this.fb.group({
 
     name_Client: [''],
     lastNameClient: [''],
     number_Identification: [''],
     email_Client: [''],
     client_bornDate: [''],
     client_Direction: [''],
     tipeIdentification: [''],
   });*/
  NewCustomerForm = new FormGroup({
    name_Client: new FormControl('', Validators.required),
    lastNameClient: new FormControl('', Validators.required),
    number_Identification: new FormControl('', Validators.required),
    email_Client: new FormControl('', Validators.email),
    client_bornDate: new FormControl('', Validators.required),
    client_Direction: new FormControl('', Validators.required),
    tipeIdentification: new FormControl('', Validators.required),
  });


  constructor(
    private clientService: ClientsService,
    private router: Router,
    private fb: FormBuilder,

  ) {

  }
  ngOnInit(): void {
  }
  onSaveNewCustomer(form: any) {
    console.log(form);
    const formValue = this.NewCustomerForm.value
    this.clientService.createCustomer(form)
      .subscribe(data => {
        alert("exito");
        console.log(data);
        this.router.navigate(['/table-customer'])
      })
  }
  sayHello() {
    alert("Hello")
    console.log("hola perro");

  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  selectFormControl = new FormControl('', Validators.required);
  matcher = new MyErrorStateMatcher();

}

