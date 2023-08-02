import { outputAst } from '@angular/compiler';
import { Todo } from './../shared/todo.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({   
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
  @Input()
  todo!: Todo;
 @Output()
 todoClicked : EventEmitter<void> = new EventEmitter()
 @Output()
 editClicked : EventEmitter<void> = new EventEmitter()
 @Output()
 deleteClicked : EventEmitter<void> = new EventEmitter()

  constructor() { }

ngOnInit(): void {
}

onTodoClicked(){
  this.todoClicked.emit()
}

onEditClicked(){
  this.editClicked.emit()
}

onDeleteClicked(){ 
  this.deleteClicked.emit()
  
}
}


