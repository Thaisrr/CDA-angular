import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../utils/models/book";

@Component({
  selector: 'app-formulaires-reactive',
  templateUrl: './formulaires-reactive.component.html',
  styleUrls: ['./formulaires-reactive.component.css']
})
export class FormulairesReactiveComponent  {

  book_title_control = new FormControl('', [
    Validators.required
  ]);
  favorite = '';


  books: Book[] = [];

  book_group = new FormGroup({
    title: new FormControl('Schtroumpf', [
      Validators.required,
      Validators.maxLength(30),
    ] ),
    author: new FormControl('Peyo')
  })

  user_group = new FormGroup({
    nom: new FormControl(),
    address: new FormGroup({
      num: new FormControl(),
      city: new FormControl()
    })
  });

  test = new FormControl();

  book_group_bis?: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.book_group_bis = this.formBuilder.group({
      title : '',
      author: ''
    })
  }

  submitTitle() {
    this.favorite = this.book_title_control.value;
    this.book_title_control.reset();
  }

  submitBook() {
    console.info(this.book_group.valid);
    const new_book = this.book_group.value;
    console.log(new_book);
    this.books.push(new_book);
  }

  hasError(control : string) {
    const title = this.book_group.controls[control];
    return title.touched && title.hasError('required');
  }


}
