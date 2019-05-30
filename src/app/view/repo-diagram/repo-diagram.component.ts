import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
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

  private options: { width; height } = { width: 800, height: 600 };
  margin = { top: 40, right: 40, bottom: 40, left: 40 };

  constructor(private d3Data: D3Service) {}

  ngOnInit() {
    this.createDiagram(this.d3Data.gD3Data.data);
  }

  createDiagram(data): void {
    const element = this.diagramContainer.nativeElement;
    const scopeData = data;

    const max = d3.max(scopeData, o => {
      return o.value;
    });
    const angleScale = d3
      .scaleLinear()
      .domain([0, max])
      .range([0, 1.5 * Math.PI]);

    const arc = d3
      .arc()
      .innerRadius((d, i) => {
        return (i + 1) * 25;
      })
      .outerRadius((d, i) => {
        return (i + 2) * 25;
      })
      .startAngle(d => {
        return angleScale(0);
      })
      .endAngle(d => {
        return angleScale(d.value);
      });

    const g = d3.select(element);
    g.selectAll('path')
      .data(scopeData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => {
        return d.color;
      })
      .attr('stroke', '#FFF')
      .attr('stroke-width', '1px');

    // text is appended to the items
    g.selectAll('text')
      .data(scopeData)
      .enter()
      .append('text')
      .text(d => {
        return d.name + ': ' + d.value + ' ';
      })
      .attr('x', (d, i) => {
        return -10;
      })
      .attr('y', (d, i) => {
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
