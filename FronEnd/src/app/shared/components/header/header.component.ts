import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAdmin = false;
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void { }
  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}
