import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

const myModules = [];

@NgModule({
   imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatMenuModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDatepickerModule,
      MatIconModule

   ],
   exports: [
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatMenuModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDatepickerModule,
      MatIconModule

   ],
})

export class MaterialModule { }