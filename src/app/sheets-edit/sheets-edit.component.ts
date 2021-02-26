import { KeyboardService } from './../keyboard.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sheets-edit',
  templateUrl: './sheets-edit.component.html',
  styleUrls: ['./sheets-edit.component.css']
})
export class SheetsEditComponent implements OnInit {

  isEnabled = true;

  selectedRowIndex = 0;

  jumbo: string;
  gramatura: number;
  umidade: number;
  alvura: number;
  espessura: number;
  opacidade: number;


  columns = ['jumbo','gramatura', 'umidade', 'alvura', 'espessura', 'opacidade'];

  data = [
    { jumbo: 'PM1A011901', gramatura: 70.4, umidade: 8.9, alvura: 60.0, espessura: 120.0, opacidade: 235.5},
    { jumbo: 'PM1A011902', gramatura: 71.1, umidade: 8.3, alvura: 63.0, espessura: 120.0, opacidade: 235.5},
    { jumbo: 'PM1A011903', gramatura: 72.3, umidade: 8.4, alvura: 60.0, espessura: 120.0, opacidade: 235.5},
    { jumbo: 'PM1A011904', gramatura: 70.2, umidade: 8.2, alvura: 60.0, espessura: 120.0, opacidade: 235.5},
    { jumbo: 'PM1A011905', gramatura: 70.5, umidade: 8.1, alvura: 62.0, espessura: 120.0, opacidade: 235.5},
    { jumbo: 'PM1A011906', gramatura: 70.8, umidade: 8.6, alvura: 60.0, espessura: 120.0, opacidade: 235.5},
  ]

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
    this.keyboardService.keyBoard$.subscribe(res=>{
       this.highlight(res.rowIndex);
        this.jumbo = res.dataSource.jumbo;
        this.gramatura = res.dataSource.gramatura;
        this.umidade = res.dataSource.umidade;
        this.alvura = res.dataSource.alvura;
        this.espessura = res.dataSource.espessura;
        this.opacidade = res.dataSource.opacidade;
    })
  }

  highlight(row: number){
    this.selectedRowIndex = row;
  }

  getId(row: number, col: number): string {
    return `r${row}c${col}`;
  }

}