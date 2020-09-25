import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
public alertCtrl

  constructor() { }
  

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
updateTask(index) {
  let alert = this.alertCtrl.create({
    title: 'Update Task?',
    message: 'Enter the new task to be done.',
    inputs: [{ name: 'editContent', placeholder: 'Conten' },
            { name: 'editStatus', placeholder: 'Status' },
            { name: 'editPriority', placeholder: 'Priority' }],
    buttons: [{ text: 'Cancel', role: 'cancel' },
              { text: 'Update', handler: data => {  
                this.tasklist[index] = data.editTask; }}]
  });
  alert.present();
}
}
