import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  clickable = false;
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreate = new EventEmitter();
  onAddPost() {
    // alert("Post Added!");
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.postCreate.emit(post);
    this.clickable = true;
  }
}
