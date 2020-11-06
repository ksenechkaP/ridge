import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-json-builder',
  templateUrl: './json-builder.component.html',
  styleUrls: ['./json-builder.component.scss']
})
export class JsonBuilderComponent implements OnInit {
  @Input() jsonUrl: any;
  @Input() jsonData;

  private data: any;
  private requestedUrl: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.requestedUrl = 'https://api.github.com/repos/vmg/redcarpet/issues?state=open';
    this.api
         .getListOfGroup(this.requestedUrl)
         .subscribe(
           data => {
             this.data = data;
             console.log(data);
           },
           err => {
             console.log(err);
           }
         );
  }

}
