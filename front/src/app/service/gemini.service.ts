import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'https://bailanysta-production.up.railway.app/api/posts/generate_ai_post/';

  constructor(private http: HttpClient) {}

  generatePost(prompt: string): Observable<{ generated_text: string }> {
    return this.http.post<{ generated_text: string }>(this.apiUrl, { prompt });
  }
}
