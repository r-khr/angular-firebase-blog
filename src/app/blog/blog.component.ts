import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogForm = new FormGroup({
    name: new FormControl('', Validators.required),
    body: new FormControl(''),
    footer: new FormControl(''),
  });

  @Output() saveBlog = new EventEmitter();

  constructor() {}

  clickSaveBlog() {
    if (this.blogForm.valid) {
      const newBlog = this.blogForm.value;
      this.saveBlog.emit(newBlog);
    }
  }
}
