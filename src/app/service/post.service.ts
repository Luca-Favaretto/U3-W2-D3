import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  constructor() {}

  async getJson() {
    return await (await fetch('../assets/db.json')).json();
  }
}
