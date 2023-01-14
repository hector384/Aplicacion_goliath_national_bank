import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DatailsCustomerComponent } from './pages/table-customer/datails-customer/datails-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FormUserModule } from "./pages/form-user/form-user.module";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatailsCustomerComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSlideToggleModule,
    MatToolbarModule,
    SidebarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    FormUserModule
  ]
})
export class AppModule { }
