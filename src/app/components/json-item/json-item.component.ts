import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-item',
  templateUrl: './json-item.component.html',
  styleUrls: ['./json-item.component.scss']
})
export class JsonItemComponent implements OnInit {
  @Input() jsonData;
  constructor() { }

  ngOnInit(): void {
  }

  getValueType(item) {
    return typeof item === 'object';
  }
}
