import { Component } from '@angular/core';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  newPost = '';
  enteredValue = '';
  onAddPost() {
    // alert("Post Added!");
    this.newPost = this.enteredValue;
  }
}
