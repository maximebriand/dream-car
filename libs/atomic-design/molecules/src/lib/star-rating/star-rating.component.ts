import {Component, Input} from '@angular/core';
import {MaterialIconComponent} from "@dream-car/atomic-design/atoms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'dc-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [MaterialIconComponent, CommonModule]
})
export class StarRatingComponent {
  @Input()
  public rating!: number;
}
