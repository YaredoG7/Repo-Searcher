import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { D3DataModel } from '../../models/d3-data-model';
import { D3Service } from '../../services/d3.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-repo-diagram',
  templateUrl: './repo-diagram.component.html',
  styleUrls: ['./repo-diagram.component.scss']
})
export class RepoDiagramComponent implements OnInit {
  @ViewChild('diagram')
  public diagramContainer: ElementRef;
  // private data: D3DataModel;

  private options: { width; height } = { width: 800, height: 600 };
  margin = { top: 40, right: 40, bottom: 40, left: 40 };

  constructor(private d3Data: D3Service) {}

  ngOnInit() {
    this.createDiagram(this.d3Data.gD3Data.data);
  }

  createDiagram(data): void {

    // this.d3Data.d3Data.subscribe(data => {
    //   this.d3ObjectData = data;
    //   console.log(this.d3ObjectData.data)
    // });

    console.log(data);
    const element = this.diagramContainer.nativeElement;
    //  const data = this.d3ObjectData.data;

    let scopeData = data;

    var max_gdp = d3.max(scopeData, function(o) {
      return o.value;
    });
    var angleScale = d3
      .scaleLinear()
      .domain([0, max_gdp])
      .range([0, 1.5 * Math.PI]);

    var arc = d3
      .arc()
      .innerRadius(function(d, i) {
        return (i + 1) * 25;
      })
      .outerRadius(function(d, i) {
        return (i + 2) * 25;
      })
      .startAngle(function(d) {
        return angleScale(0);
      })
      .endAngle(function(d) {
        return angleScale(d.value);
      });

    var g = d3.select(element);
    g.selectAll('path')
      .data(scopeData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) {
        return d.color;
      })
      .attr('stroke', '#FFF')
      .attr('stroke-width', '1px');

    // text is appended to the items
    g.selectAll('text')
      .data(scopeData)
      .enter()
      .append('text')
      .text(function(d) {
        return d.name + ': ' + d.value + ' ';
      })
      .attr('x', function(d, i) {
        return -10;
      })
      .attr('y', function(d, i) {
        return -(i + 1) * 25;
      })
      .attr('dy', -8)
      .style('text-anchor', 'end')
      .style('font-size', '19px');

    g.attr(
      'transform',
      'translate(' +
        this.options.width / 2 +
        ',' +
        this.options.height / 2 +
        ')'
    );
  }
}