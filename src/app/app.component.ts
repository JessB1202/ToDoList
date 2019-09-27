import { Component } from '@angular/core';

interface ToDo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
  toDoObjects: ToDo[] = [
    {
      task: "Clean Room",
      completed: false
    },
    {
      task: "Study Coding",
      completed: false
    },
    {
      task: "Wash Dishes",
      completed: false
    },
    {
      task: "Walk the Dogs",
      completed: false
    },
    {
      task: "Grocery Shopping",
      completed: false
    }
  ];

  newItem : string;
  filterToDo : string;
  filteredToDo = [...this.toDoObjects];

  addToDo() {
    let obj: ToDo = {task: this.newItem, completed: false};
    this.toDoObjects.push(obj);
    this.filterList();
    this.newItem = "";
  }

  removeToDo(index:number) {
    // this.toDoObjects.splice(index,1);
    this.filterList();
    this.filteredToDo.splice(index, 1);
  }

  filterList () {
    const lower = this.filterToDo ? this.filterToDo.toLowerCase() : '';
    this.filteredToDo = this.toDoObjects.filter(item => item.task.toLowerCase().includes(lower));
  }

  completeToDo (index) {
    this.filteredToDo[index].completed = true;
    this.filterList();
  }
}