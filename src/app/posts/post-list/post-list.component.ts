import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //     {title: 'First post', content:"This is the first post's content."},
  //     {title: 'Second post', content:"This is the second post's content."},
  //     {title: 'Third post', content:"This is the third post's content."}
  // ];
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private PostSub = new Subscription();
  constructor(public postsService: PostService) {}

  ngOnInit() {
    this.postsService.getPosts(); // this is optional as it does nothing but just fetching post at the beginning of the component initialization.

    //Setting up a subscription for Listening to PostUpdatedListner from serivce and updateing posts data.
    this.PostSub = this.postsService
      .getPostUpdatedListner()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  // unsubscribing subscription to prevent memory leaks.
  ngOnDestroy() {
    this.PostSub.unsubscribe();
  }
}
