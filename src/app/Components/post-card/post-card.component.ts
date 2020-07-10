import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { AuthService } from '../../Services/auth.service';
import { Post } from '../../Models/post';
import { AppService } from '../../Services/app.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private appService: AppService
  ) {}

  user: User;
  post: Post;

  ngOnInit(): void {

    this.appService.getPost()
        .subscribe((data) => {
           this.post = data;
    });
  }
}
