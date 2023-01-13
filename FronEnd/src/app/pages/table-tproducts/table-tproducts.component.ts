
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service'; import { FormBuilder, FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { Products } from '../../modelo/Customer';
import { TproductsService } from 'src/app/services/tproducts.service';


export interface TproductData {
  id_Transaction: number,
  transaction_description: string,
  valueOfTransaction: number,
  movement_type: string,
  balance: number,
  available_balance: number,
  emiterAccount: string,
  reciberAccount: string,
  transaction_tipe: string
  transaction_date: string,
}

@Component({
  selector: 'app-table-tproducts',
  templateUrl: './table-tproducts.component.html',
  styleUrls: ['./table-tproducts.component.css']
})
export class TableTproductsComponent implements AfterViewInit {

  NewTProductsForm = new FormGroup({
    number_Identification: new FormControl('', Validators.required),
  });

  displayedColumns: string[] = ['transaction_date', 'transaction_tipe', 'transaction_description', 'movement_type', 'balance', 'available_balance',
    'valueOfTransaction', 'Actions']
  dataSource!: MatTableDataSource<TproductData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  TproductD: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  constructor(
    private tproductService: TproductsService
  ) {
    this.dataSource = new MatTableDataSource(this.TproductD);
  }

  queryNewTproducts(form: any) {
    this.tproductService.findTPrudctsByCC(form.number_Identification).subscribe(res => { this.TproductD = res });
  }
  DeleteTProducts(user: TproductData) {
    Swal.fire({
      title: '¿Seguro que desea eliminar esta cuenta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.tproductService.deleteProductsById(user)

        Swal.fire(
          'Eliminado!',
          'Esta cuenta ha sido eliminada.',
          'success'
        )

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'La cuenta no ha sido eliminada',
          'error'
        )
      }
    })
  }

}
