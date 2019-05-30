import { Injectable } from '@angular/core';
import { D3DataModel } from '../models/d3-data-model';
import * as d3 from 'd3';

@Injectable()
export class D3Service {

  private data: D3DataModel = {data: []}

  constructor() { }

  applyZoom(svgElement, containerElement){
    let svg;
    let container;
    let zoomed;
    let zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
       const transform = d3.event.transform;
       container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);

  }

  set sD3Data(data: D3DataModel) {
    this.data = data;
  }

  get gD3Data(): D3DataModel {
    return this.data;
  }

}
