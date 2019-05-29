import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { D3Service } from '../services/d3.service';

@Directive({
  selector: '[appZoomable]'
})
export class ZoomableDirective implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('appZoomable') appZoomable: ElementRef;

  constructor(private d3Service: D3Service, private element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyZoom(this.appZoomable, this.element.nativeElement);
  }
}
