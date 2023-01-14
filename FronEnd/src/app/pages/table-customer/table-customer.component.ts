
import { ClientsService } from 'src/app/services/clients.service';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { Customer } from 'src/app/modelo/Customer';


@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.css']
})
export class TableCustomerComponent implements AfterViewInit {


  displayedColumns: string[] = ['id_client', 'name_Client', 'number_Identification',
    'Actions']
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clienteService: ClientsService
  ) {



    //const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.userD);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCustomer();

  }
  userD: any;


  getCustomer() {
    this.clienteService.getClients().subscribe(response => {
      this.userD = response

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  DeleteCustomer(user: Customer) {
    Swal.fire({
      title: '¿Seguro que desea eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCustomerById(user)

        Swal.fire(
          'Eliminado!',
          'Este usuario ha sido eliminado.',
          'success'
        )
        this.clienteService.getClients().subscribe(response => {
          this.userD = response
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'El usuario no ha sido eliminado',
          'error'
        )
      }
    })
  }
}



