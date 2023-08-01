import { EditTodoDialogComponent } from './../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
 
todos?: Todo[]
showValidationError!: boolean;
constructor(private DataService: DataService, private dialog : MatDialog){}

  ngOnInit(): void {
    this.todos = this.DataService.getAllTodos()
  }
  
  onFormSubmit(form: NgForm){
    if (form.invalid) return this.showValidationError=true
    this.DataService.addTodo(new Todo(form.value.text))
    this.showValidationError = false
        
    form.reset()
    return 
   
  }
  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed

  }
  editTodo(todo: Todo){ 
    const index = this.todos?.indexOf(todo)
    let dialogRef = this.dialog.open(EditTodoDialogComponent,{
      width: '700px',
      data: todo
    });
    
    dialogRef.afterClosed().subscribe((result)=>{
      
      if (result&&index!== undefined){

        this.DataService.updateTodo(index, result)

      }
    })
  }
}