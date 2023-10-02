import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/post.service";

import { faTrash, faExclamation, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
  })
export class ManagementComponent implements OnInit {
  user: string  = localStorage.getItem("currentUser") as string
  posts: Post[] = []

  constructor(
    private dataService: DataService,
    private postService: PostService,
    library: FaIconLibrary
  ) { library.addIcons(
      faTrash, 
      faExclamation, 
      faExclamationTriangle
    )}

  ngOnInit(): void {
    this.renderPosts()

    this.dataService.getSubmit().subscribe((data) => {
      this.renderPosts()
    })
  }

  async renderPosts() {
    await this.postService.loadPostByClientUsername(JSON.parse(this.user).username)
    .then((post) => {
      this.posts = post
    })
  }
  
  async removePost(id: number | undefined) {
    if(id) {
      await this.postService.removePost(id);
      this.renderPosts()
    }
  }
 }