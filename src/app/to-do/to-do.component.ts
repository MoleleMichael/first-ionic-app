import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
//public alertCtrl

  constructor(public alertController: AlertController) { }
  

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
 async updateTask(index) {
   const alert = await this.alertController.create({
  //let alert = this.alertController.create
    title: 'Update Task?',
    message: 'Enter the new task to be done.',
    inputs: [{ name: 'editContent', placeholder: 'Content' },
            { name: 'editStatus', placeholder: 'Status' },
            { name: 'editPriority', placeholder: 'Priority' }],
    buttons: [{ text: 'Cancel', role: 'cancel' },
              { text: 'Update', handler: data => {  
                this.tasklist[index] = data.editTask; }}]
  });
 await alert.present();
}
}
