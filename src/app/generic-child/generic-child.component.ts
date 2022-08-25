import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-child',
  templateUrl: './generic-child.component.html',
  styleUrls: ['./generic-child.component.scss']
})
export class GenericChildComponent implements OnInit {

  @Input() delay = 0;
  @Output() readonly childComplete: EventEmitter<number> = new EventEmitter<number>();

  displayText = 'Loading Data....'

  ngOnInit(): void {

    setTimeout(() => {
      
      this.displayText = 'Complete!'
      this.childComplete.emit(1);

    }, this.delay);

  }

}
