import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MyErrorStateMatcher } from '../../form-user.component';
import { Customer } from 'src/app/modelo/Customer';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() eventSubmit = new EventEmitter<any>();
  @Input() customer: Customer | undefined;
  NewCustomerForm = new FormGroup({

    name_Client: new FormControl('', Validators.required),
    lastNameClient: new FormControl('', Validators.required),
    number_Identification: new FormControl('', Validators.required),
    email_Client: new FormControl('', Validators.email),
    client_bornDate: new FormControl('', Validators.required),
    client_Direction: new FormControl('', Validators.required),
    tipeIdentification: new FormControl('', Validators.required),
    creationDate: new FormControl('', Validators.required),

  });

  constructor(
    private clientService: ClientsService,
    private router: Router,

  ) {

  }
  ngOnInit(): void {
    console.log(this.customer)
    if (this.customer) {
      console.log()
      this.NewCustomerForm.patchValue(this.customer)
    }
  }
  age!: number;
  showAge!: number;


  onSaveNewCustomer(form: any,) {
    this.eventSubmit.emit(form);
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  selectFormControl = new FormControl('', Validators.required);
  matcher = new MyErrorStateMatcher();

}


