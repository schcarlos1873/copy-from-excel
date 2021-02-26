import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private keyBoard = new Subject<any>();
  
  keyBoard$ =  this.keyBoard.asObservable();

  onKeyPress(message:any): void
  {
    this.keyBoard.next(message);
  }

}
