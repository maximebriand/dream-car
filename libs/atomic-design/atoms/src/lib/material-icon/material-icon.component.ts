import {Component, Input} from '@angular/core';

@Component({
  selector: 'dc-material-icon',
  templateUrl: './material-icon.component.html',
  styleUrls: ['./material-icon.component.scss'],
  standalone: true
})
export class MaterialIconComponent {
  @Input()
  public icon!: string;

  private _color!: string;

  public get color(): string {
    return this._color;
  }

  @Input()
  public set color(color: string) {
    this._color = `var(--${color}`
  }

}
