import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post.model';
import {map} from 'rxjs/operators';

@Injectable()
export class PostService{
  constructor(private http: HttpClient) {
  }
  getPosts(email: string): Observable<Post> {
    return this.http.get(`http://localhost:3000/posts?name=${name}`)
      .pipe(map((post: Post[]) => post[0] ? post[0] : undefined));
  }
  createPost(post: Post){
    return this.http.post('http://localhost:3000/posts', post);
  }
}
