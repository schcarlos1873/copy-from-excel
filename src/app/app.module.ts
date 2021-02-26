import { KeyboardService } from './keyboard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SheetsEditComponent } from './sheets-edit/sheets-edit.component';
import { KeyArrowDirective } from './key-arrow.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatTableModule ],
  declarations: [ AppComponent, HelloComponent, SheetsEditComponent, KeyArrowDirective ],
  providers: [ KeyArrowDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
