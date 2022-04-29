import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../utils/models/post";
import {PostsService} from "../../utils/services/posts.service";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post!: Post;
  @Output() on_delete = new EventEmitter();


  constructor(private post_service: PostsService) { }

  delete() {
      this.post_service.delete(this.post.id!)
        .subscribe( () => this.on_delete.emit());
  }

}
