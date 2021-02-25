import { Component, Output, EventEmitter } from '@angular/core';
// import {Post} from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  clickable = false;

  // @Output() postCreate = new EventEmitter<Post>();

  constructor(public postsService: PostService) {}

  onAddPost(form: NgForm) {
    // alert("Post Added!");
    if (form.invalid) return;
    this.postsService.addPost(form.value.title, form.value.content);
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreate.emit(post);
    // this.clickable = !this.clickable;
    form.resetForm();
  }
}
