import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-char-span',
  templateUrl: './char-span.component.html',
  styleUrls: ['./char-span.component.scss'],
})
export class CharSpanComponent {
  @Input() char = '';
  @Input() color = '';
}
