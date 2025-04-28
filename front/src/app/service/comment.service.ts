import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const COMMENT_API = 'https://bailanysta-production.up.railway.app/api/comments/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  deleteComment(commentId: number | undefined): Observable<any> {
    return this.http.delete(`${COMMENT_API}${commentId}`);
  }

}
