import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../utils/services/posts.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{

  post_group!: FormGroup;
  @Output() on_create = new EventEmitter();

  constructor(private post_service: PostsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.post_group = new FormGroup({
      text: new FormControl('', Validators.required)
    })
  }

  save() {
    this.post_service.create(this.post_group.value)
      .subscribe( post => {
        console.info(post);
        this.post_group.reset();
        this.on_create.emit();
      })
  }

}
