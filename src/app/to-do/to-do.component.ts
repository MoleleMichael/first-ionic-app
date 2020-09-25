import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


  constructor(public navCtrl: NavController) { }
  

  ngOnInit() {
  }

tasklist = [
  {content:"Check Angular",status:"Completed",priority:"Major"},
  {content:"Check Ionic",status:"Completed",priority:"Moderate"},
  {content:"Create tutorial",status:"OnHold",priority:"low"},
  {content:"Brainstorm ideas",status:"Active",priority:"Major"},
  {content:"Update the website",status:"Active",priority:"Critical"},
  {content:"Buld mobile app",status:"OnHold",priority:"Major"},   
  ]

  taskName: string = "";
 
addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.tasklist.push(task);
      this.taskName = "";
    }
  }
  deleteTask(index){
  this.tasklist.splice(index, 1);
}

}
