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
  async getJson2() {
    await (await fetch('../assets/db.json')).json().then((resp) => {
      this.posts = resp;
      console.log(this.posts);
    });
  }

  modPost(index: number) {
    this.posts.forEach((post) => {
      if (post.id === index) {
        post.active === true ? (post.active = false) : (post.active = true);
      }
    });
  }
}
