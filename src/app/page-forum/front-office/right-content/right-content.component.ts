import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.css']
})
export class RightContentComponent implements OnInit {
  posts: Post[] = []

  constructor(
    private postService: PostService,
    library: FaIconLibrary
  ) { library.addIcons(faArrowRight) }

  ngOnInit(): void {
    this.postService.loadPostByTimeOrder()
    .then((post) => {
      this.posts = post

      console.log(this.posts)
    })
  }

  seperateDateTime (dateTime: string) {
    const formDate = dateTime.split(":")
    return [
      `${formDate[3]}.${formDate[4]} o'clock`,
      ` on ${formDate[0]}-${formDate[1]}-${formDate[2]}`
    ]
  }

  getBackGroundColor (reciever: string | undefined): string | undefined {
    switch(reciever) {
      case 'introduce' : return '#90FF9B'
      case 'game-discussion' : return '#90DEFF'
      case 'feedback-suggestion' : return '#FFC27B'
      case 'news' : return '#fa77ff'
      case 'supports' : return '#FF1B52'
      case 'Server Etiquette' : return '#FCFF71'
      default : return '#CDCDCD';
    }
  }
}
