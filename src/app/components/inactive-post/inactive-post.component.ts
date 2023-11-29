import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss'],
})
export class InactivePostComponent implements OnInit {
  arrayPost: Post[] = [];
  constructor(private postSrv: PostService) {
    this.postSrv.getJson().then((post) => {
      let array = post;
      console.log(post);
      array.forEach((post: any) => {
        this.arrayPost = array.filter((post: any) => !post.active);
      });
    });
  }

  ngOnInit(): void {}
}
