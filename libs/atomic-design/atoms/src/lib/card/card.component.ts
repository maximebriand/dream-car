import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent implements OnInit {
  @Input()
  backgroundColor!: string;

  @Input()
  color = '#fff';

  constructor() {
    console.log('coucou')
    return
  }

  ngOnInit(): void {
    return
  }
}

