
import { ClientsService } from 'src/app/services/clients.service';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  id_client: string;
  name_Client: string;
  lastNameClient: string;
  number_Identification: string;
}




@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.css']
})
export class TableCustomerComponent implements AfterViewInit {

  displayedColumns: string[] = ['id_client', 'name_Client', 'lastNameClient', 'number_Identification'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  public peopl: Array<any> = []

  constructor(
    private clienteService: ClientsService
  ) {

    this.clienteService.getClients().subscribe((res: any) => {
      console.log(res),
        this.peopl = res
      console.log(this.peopl)

    });
    console.log(this.peopl)
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
      console.log(this.userD);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}



