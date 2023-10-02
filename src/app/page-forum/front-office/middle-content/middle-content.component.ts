import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.css']
})
export class MiddleContentComponent implements OnInit {
  private selectedCommunity: string | undefined
  private filterPosts = ''
  private posts: Post[] = []
  private test: Post[] = []

  constructor(
    private postService: PostService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getCommunity().subscribe((data) => {
      this.selectedCommunity = data
      console.log(this.selectedCommunity)

      // to render everytime when recieved data from left-content.
      this.renderPostsByCommunity(this.selectedCommunity)
    })

    this.dataService.getFilterPost().subscribe((data) => {
      this.filterPosts = data
      console.log(this.filterPosts)

      this.renderFilterFactor(this.filterPosts)
      console.log(this.posts)
      // this.renderPostsByCommunity(this.selectedCommunity)
    })
  }

  async renderPosts(): Promise<void> {
    this.posts = await this.postService.loadPosts()
    this.test = await this.postService.loadPosts()
    console.log(this.posts)
  }

  async renderPostsByCommunity(community: string | undefined): Promise<void> {
    if (community) {
      this.posts = await this.postService.loadPostByCommunity(community)
    } else {
      this.renderPosts();
    }
  }

  renderFilterFactor(filter: string) {
    this.posts = this.test.filter((post) => {
      return post.topic?.toLowerCase().includes(filter.toLowerCase())
    })
  }

  get getPosts(): Post[] {
    return this.posts;
  }

  seperateDateTime (dateTime: string) {
    const formDate = dateTime.split(":")
    return `${formDate[3]}.${formDate[4]}  o'clock`
  }
}
