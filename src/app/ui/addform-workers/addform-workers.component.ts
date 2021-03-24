import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-workers',
  templateUrl: './addform-workers.component.html',
  styleUrls: ['./addform-workers.component.css'],
})
export class AddformWorkersComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onAddWorker() {

    if(this.name=='' || this.name==undefined || this.surname == '' || this.surname==undefined){
    
    }
    else{
      this.addWorker.emit({
        name: this.name,
        surname: this.surname,
        type: this.type,
        edit: false
      });
    }
    
  }
}
