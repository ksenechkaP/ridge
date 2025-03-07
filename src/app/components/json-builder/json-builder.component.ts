import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-builder',
  templateUrl: './json-builder.component.html',
  styleUrls: ['./json-builder.component.scss']
})
export class JsonBuilderComponent implements OnInit, OnChanges {
   @Input() jsonURL: any;
  public jsonData;
  private requestedURL: any;
  public error: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.requestedURL = this.jsonURL;
    if (this.requestedURL) {
      this.getJson();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.requestedURL = changes.jsonURL.currentValue;
    if (this.requestedURL) {
      this.getJson();
    }
  }

  public getJson() {
    return this.http.get(this.requestedURL).subscribe((data) => {
      this.error = null;
      this.jsonData = data;
    },
      error => {
        this.jsonData = null;
        this.error = error;
      });
  }
}
