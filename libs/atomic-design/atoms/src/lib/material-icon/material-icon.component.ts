import {Component, Input} from '@angular/core';

@Component({
  selector: 'dc-material-icon',
  templateUrl: './material-icon.component.html',
  styleUrls: ['./material-icon.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.small]': 'size === "S"',
    '[class.medium]': 'size === "M"',
    '[class.large]': 'size === "L"',
  },
  standalone: true
})
export class MaterialIconComponent {
  @Input()
  public icon!: string;
  
  @Input()
  public size: 'S' | 'M' | 'L' = 'S';

  @Input()
  private _color!: string;

  public get color(): string {
    if (this._color.includes('primary')) {
      return `var(--${this._color})`;
    }
    return this._color;
  }

  @Input()
  public set color(color: string) {
    this._color = color;
  }

}
