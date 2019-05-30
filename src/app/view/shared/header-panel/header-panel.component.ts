import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToYaredsLinkedIn(url: string) {
    window.open(url, '_blank');
 }
}
