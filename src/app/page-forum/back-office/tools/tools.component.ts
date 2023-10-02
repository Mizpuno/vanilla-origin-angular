import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post.model";
import { DataService } from "src/app/services/data.service";
import { PostService } from "src/app/services/post.service";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']
  })
export class ToolsComponent implements OnInit { 
  user: string  = localStorage.getItem("currentUser") as string
  userTier: string = JSON.parse(this.user).role;
  userStatus: boolean = false
  community: string ='introduce'

  constructor(
    private dataService: DataService,
    private postService: PostService
  ) {
    
  }

  ngOnInit(): void {
    this.dataService.getLogOutState()
    .subscribe(() => {this.checkActiveUser()})
  }

  checkActiveUser = () => (!localStorage.getItem('currentUser')) 
  ? this.userStatus = false : this.userStatus = true

  createPost(topic: string, content: string) {
    if (topic && content) {
      const post = new Post()
      post.client = JSON.parse(this.user)
      post.topic = topic
      post.content = content
      post.community = this.community
      
      this.postService.addPost(post)
      this.dataService.setSubmit()

      Swal.fire({
        icon: 'success',
        title: 'Created Post',
        text: 'Your post has been created. If you can not see your post, please refresh or go back to see in global feed.'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dont missing the topic or content!'
      })
    }
    
  }
}