import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-span',
  templateUrl: './char-span.component.html',
  styleUrls: ['./char-span.component.scss'],
})
export class CharSpanComponent implements OnInit {
  @Input() char = 'd';
  @Input() color = 'red';

  constructor() {}

  ngOnInit(): void {}
}
