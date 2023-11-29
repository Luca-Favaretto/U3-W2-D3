import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
})
export class ActivePostComponent implements OnInit, DoCheck {
  arrayPost: Post[] = [];
  constructor(private postSrv: PostService) {}

  ngOnInit(): void {
    this.postSrv.getJson2();
  }
  ngDoCheck(): void {
    this.arrayPost = this.postSrv.posts.filter((post: any) => post.active);
    console.log(this.postSrv.posts);
  }

  // modPost(index: number): void {
  //   this.postSrv.modPost(index);
  // }
  modPost(index: number) {
    this.postSrv.posts.forEach((post) => {
      if (post.id === index) {
        post.active === true ? (post.active = false) : (post.active = true);
      }
    });
  }
}
