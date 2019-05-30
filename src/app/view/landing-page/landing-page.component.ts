import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations:[
      trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    transition('* => *', [style({ opacity: 0 }), animate(400)]),
    transition('* => *', animate(400, style({ opacity: 0 })))
  ])
  ]
})
export class LandingPageComponent implements OnInit {

  private imagePath = ['../../../assets/Client.png', '../../../assets/Server.jpg', '../../../assets/resp.PNG'];
  public imageSrc = '../../../assets/Client.png';
  public idx = 1;
  constructor() { }

  ngOnInit() {
  }

  changePath() {
    if (this.idx > 2) {
      this.idx = 0;
    }
    this.imageSrc = this.imagePath[this.idx];
    this.idx ++;

  }

}
