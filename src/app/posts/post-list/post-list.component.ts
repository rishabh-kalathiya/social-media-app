import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  // posts = [
  //     {title: 'First post', content:"This is the first post's content."},
  //     {title: 'Second post', content:"This is the second post's content."},
  //     {title: 'Third post', content:"This is the third post's content."}
  // ];
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  constructor(public postsService: PostService) {}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
  }
}