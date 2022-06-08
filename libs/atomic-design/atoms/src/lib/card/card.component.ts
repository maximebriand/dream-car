import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dream-car-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent implements OnInit {
  @Input()
  backgroundColor!: string;

  constructor() {
    console.log('coucou')
    return
  }

  ngOnInit(): void {
    return
  }
}

// NgModule({
//   declarations: [CardComponent],
//   // imports: [IonicModule],
//   exports: [CardComponent]
// })
