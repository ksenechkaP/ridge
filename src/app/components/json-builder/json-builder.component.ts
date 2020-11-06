import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-builder',
  templateUrl: './json-builder.component.html',
  styleUrls: ['./json-builder.component.scss']
})
export class JsonBuilderComponent implements OnInit {
  @Input() jsonUrl: any;
  @Input() jsonData;

  private data: any;
  constructor() { }

  ngOnInit(): void {

  }

}
