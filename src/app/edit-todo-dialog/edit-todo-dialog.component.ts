import { Todo } from './../shared/todo.model';
import { NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit{

  constructor(public dialogref: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo){}


  ngOnInit(): void {
    
  }
  close(){
    this.dialogref.close()
  }


  onFormSubmit(form: NgForm){
 
    if (form.invalid) return
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    
    this.dialogref.close(updatedTodo)


  }

}
