import {Component, Input, OnInit} from '@angular/core';
import {CardComponent} from "@dream-car/atomic-design/atoms";
import {StarRatingComponent} from "@dream-car/atomic-design/molecules";
import {DataIconComponent} from "../../../../../molecules/src/lib/data-icon/data-icon.component";

@Component({
  selector: 'dc-car-card',
  templateUrl: './car-card-detailed.component.html',
  styleUrls: ['./car-card-detailed.component.scss'],
  standalone: true,
  imports: [CardComponent, StarRatingComponent, DataIconComponent]
})
export class CarCardDetailedComponent implements OnInit {
  @Input()
  backgroundColor!: string;
  @Input()
  color = '#fff';

  ngOnInit(): void {
    return
  }
}
