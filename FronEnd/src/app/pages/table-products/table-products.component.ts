import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service'; import { FormBuilder, FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { Products } from '../../modelo/Customer';

export interface productData {
  id_account: string,
  gmf_on: string,
  type_account: string,
  estate_account: string,
  available_balance: number,
  number_Identification: string,
  number_account: string,
  balance_account: number,
}




@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements AfterViewInit {



  NewProductsForm = new FormGroup({
    number_Identification: new FormControl('', Validators.required),
  });

  displayedColumns: string[] = ['number_account', 'type_account', 'available_balance',
    'balance_account', 'Actions']
  dataSource!: MatTableDataSource<productData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  productD: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //this.getProducts();
  }
  constructor(
    private productService: ProductsService
  ) {
    this.dataSource = new MatTableDataSource(this.productD);
  }
  getProducts() {
    this.productService.getProducts().subscribe(res => { this.productD = res });
  }
  onSaveNewCustomer(form: any) {

    this.productService.findPrudctsByCC(form.number_Identification).subscribe(res => { this.productD = res });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  DeleteProducts(user: productData) {
    Swal.fire({
      title: '¿Seguro que desea eliminar esta cuenta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductsById(user)

        Swal.fire(
          'Eliminado!',
          'Esta cuenta ha sido eliminada.',
          'success'
        )
        this.productService.getProducts().subscribe(response => {
          this.productD = response
        })
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