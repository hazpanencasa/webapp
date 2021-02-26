import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../model/post';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  constructor(private http: HttpClient) {}
  getAllPost() {
    return this.http.get<Post[]>(environment.URL_API);
  }
}
