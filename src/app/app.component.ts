import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Paste it';
  val:any;
   displayedColumns: string[] ;
  dataSource: any[] = [];

  data(event:ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text');
    let row_data = pastedText.split('\n');
    this.displayedColumns = row_data[0].split('\t');
    delete row_data[0];
    // Create table dataSource
    let data=[];

    row_data.forEach(row_data=>{
      let row={};
      this.displayedColumns.forEach((a, index)=>{row[a]= row_data.split('\t')[index]});
      data.push(row);
    })
    console.log(data);
    this.dataSource = data;
    }
}
