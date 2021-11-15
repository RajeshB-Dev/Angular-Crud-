import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {
  private mytextSource = new Subject<number>();

currentMytext = this.mytextSource.asObservable();

constructor() { }

changeMytext(mytext: number)
{
    this.mytextSource.next(mytext);
    console.log(mytext)
}
}
