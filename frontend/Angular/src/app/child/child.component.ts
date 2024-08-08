import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

@Input() displayValue: number = 0;

@Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();

changeValue(newValue: number) {
  this.valueChanged.emit(newValue);
}

}
