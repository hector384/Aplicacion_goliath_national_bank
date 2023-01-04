import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FronEnd';

  constructor(
    private clienteService: ClientsService
  ) {
    this.clienteService.getClients().subscribe(res => console.log(res));
  }
}
