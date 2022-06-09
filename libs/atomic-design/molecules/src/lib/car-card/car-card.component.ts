import {Component, Input, OnInit} from '@angular/core';
import {CardComponent} from "@dream-car/atomic-design/atoms";

@Component({
  selector: 'dc-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  standalone: true,
  imports: [CardComponent]
})
export class CarCardComponent implements OnInit {
  @Input()
  backgroundColor!: string;
  @Input()
  color = '#fff';

  ngOnInit(): void {
    return
  }
}
