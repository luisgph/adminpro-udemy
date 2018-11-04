import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  constructor() { }
  
  progreso1:number = 20;
  progreso2:number = 30;

  ngOnInit() {
  }

  actualizar(event){
    console.log('evento ' , event);
  }

}
