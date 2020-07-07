import { Component, OnInit, Output, HostListener } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  constructor() { }
  @Output() sidenavToggle = new EventEmitter();
  isAuth = false;

  onToggleSidenav() {
    this.sidenavToggle.emit;
  }
  ngOnInit(): void {}
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
