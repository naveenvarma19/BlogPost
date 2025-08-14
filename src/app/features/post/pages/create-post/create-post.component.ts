import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  createPostForm = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true }),
    content: new FormControl<string>('', { nonNullable: true })
  })

  onCreatePost() {
    console.log(this.createPostForm.value)
  }
}
