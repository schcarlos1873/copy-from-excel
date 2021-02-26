import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { KeyboardService } from './keyboard.service';

@Directive({
  selector: '[appKeyArrow]'
})
export class KeyArrowDirective {

  @Input() rowIndex: number;
  @Input() dataSource: any;

  constructor(
    private keyboardService: KeyboardService, 
    public element: ElementRef, 
    private render: Renderer2
  ) {
    this.render.setAttribute(this.element.nativeElement, "tabindex", "0")
  }

  @HostListener('keydown.arrowup', ['$event'])
  onArrowUpKeyDown(event: KeyboardEvent) {
      // const row = event.currentTarget as HTMLTableRowElement;
      const row = this.element.nativeElement.parentElement;
      const currentIndex = this.element.nativeElement.cellIndex;
      const nextRow =  row.previousElementSibling as HTMLTableRowElement;
      
      if (nextRow) {
        nextRow.cells[currentIndex].focus();
        this.selectInput(nextRow.cells[currentIndex]);
      }
      this.keyboardService.onKeyPress({ element: this.element, action: 'UP', dataSource: this.dataSource, rowIndex: this.rowIndex - 1 });
      event.preventDefault();
  }

    @HostListener('keydown.arrowdown', ['$event'])
    onArrowDownKeyDown(event: KeyboardEvent) {
      const row = this.element.nativeElement.parentElement;
      const currentIndex = this.element.nativeElement.cellIndex;
      const nextRow = row.nextElementSibling as HTMLTableRowElement;
      if (nextRow) {
        nextRow.cells[currentIndex].focus();
        this.selectInput(nextRow.cells[currentIndex]);
      }
      this.keyboardService.onKeyPress({ element: this.element, action: 'DOWN', dataSource: this.dataSource, rowIndex: this.rowIndex + 1});
      event.preventDefault();
    }

    @HostListener('keydown.arrowleft', ['$event'])
    onArrowLeft(event: KeyboardEvent) {
      const row = event.currentTarget as HTMLTableRowElement;
      const nextRow = row.previousElementSibling as HTMLTableRowElement;
      if (nextRow) {
          nextRow.focus();
          this.selectInput(nextRow);
      }
      this.keyboardService.onKeyPress({ element: this.element, action: 'LEFT', dataSource: this.dataSource, rowIndex: this.rowIndex });
      event.preventDefault();
    }
  
    @HostListener('keydown.arrowright', ['$event'])
    onArrowRight(event: KeyboardEvent) {
      const row =  event.currentTarget as HTMLTableRowElement;
      const nextRow = row.nextElementSibling as HTMLTableRowElement;

      if (nextRow) {
          nextRow.focus();
          this.selectInput(nextRow);
      }
      this.keyboardService.onKeyPress({ element: this.element, action: 'RIGTH', dataSource: this.dataSource, rowIndex: this.rowIndex });
      event.preventDefault();
    }

    @HostListener('keydown.enter', ['$event'])
    onEnterKeyDown(event: KeyboardEvent) {
      const row = this.element.nativeElement.parentElement;
      const currentIndex = this.element.nativeElement.cellIndex;
      const nextRow = row.nextElementSibling as HTMLTableRowElement;
      if (nextRow) {
        nextRow.cells[currentIndex].focus();
        this.selectInput(nextRow.cells[currentIndex]);
      }
      this.keyboardService.onKeyPress({ element: this.element, action: 'ENTER', dataSource: this.dataSource, rowIndex: this.rowIndex + 1});
      event.preventDefault();
    }

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
      this.keyboardService.onKeyPress({ element: this.element, action: 'CLICK', dataSource: this.dataSource, rowIndex: this.rowIndex});
    }

    // @HostListener('keydown.tab', ['$event'])
    // @HostListener('keydown.shift.tab', ['$event'])
    // @HostListener('keydown.meta.tab', ['$event'])
    // onShiftKeyDown(event: KeyboardEvent) {
    //   console.log(this.element.nativeElement);
    //   this.selectInput(this.element.nativeElement);
    // }

    selectInput(currentCell: any) {
      const cell = currentCell.getElementsByTagName('input');
      if (cell) {
        cell[0].focus();
        cell[0].select();
      }
    }

}
