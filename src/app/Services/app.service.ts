import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Post } from '../Models/post';
import { Category } from '../Models/category';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  // Posts:

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}posts`);
  }

  createPost(): Observable<Post[]>{
    return this.http.post<Post[]>(`${this.api}posts`, {
      title: 'Hello',
      photoUrl: 'www.welcome.com',
      content: 'Test #2',
      categoryName: 'Sport',
      tags: 'funny,love,test',
      visibleUsername: true
    });
  }

  updatePost(post: Post): Observable<Post[]>{
    return this.http.patch<Post[]>(`${this.api}posts/1`, post);
  }

  deletePost(): Observable<Post[]>{
    return this.http.delete<Post[]>(`${this.api}posts/9`);
  }

  getPost(): Observable<Post>{
    return this.http.get<Post>(`${this.api}posts/1`);
  }

  getUserPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}posts/myposts`);
  }

  getUserPost(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.api}posts/myposts/1`);
  }

  // Categories:

  createCategory(): Observable<Category>{
    return this.http.post<Category>(`${this.api}categories`, { categoryName: 'Sport' });
  }
  getCategory(): Observable<Category>{
    return this.http.get<Category>(`${this.api}categories/2`);
  }
  getAllCategories(): Observable<Category>{
    return this.http.get<Category>(`${this.api}categories`);
  }
  updateCategory(): Observable<Category>{
    return this.http.patch<Category>(`${this.api}categories/1`, {categoryName: '123545'});
  }


  // Create comment

  createComment(){
    this.http.post(`${this.api}comments/1`, {commentString: 'First Comment'});
  }

}

