import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
 
todos?: Todo[]

constructor(private DataService: DataService){}


  ngOnInit(): void {
    this.todos = this.DataService.getAllTodos()
  }

  onFormSubmit(form: NgForm){
    if (form.invalid) return alert("vjj")
    console.log(form);
    this.DataService.addTodo(new Todo(form.value.text))
  }
}