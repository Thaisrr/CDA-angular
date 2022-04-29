import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../utils/services/posts.service";
import {Post} from "../../utils/models/post";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  posts?: Post[];

  constructor( private post_service: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.post_service.getAll()
      .subscribe(posts => this.posts = posts);
  }




}
