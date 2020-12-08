import { Component, OnInit } from '@angular/core';
import {Post} from "../shared/model/post.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<Post> =  [
    new Post("name1", "08.12.2020", "content1", 1),
    new Post("name2", "10.12.2020", "content2", 2),
    new Post("name3", "11.12.2020", "content3", 3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
