import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  reverse: boolean = true
  user: User | undefined
  searchValue = ''

  constructor(
    private dataService: DataService,
  ) {
  }

  fillFilterPost(dict: string | undefined) {
    this.dataService.setFilterPost(dict)
  }

  changeOffice() {
    this.dataService.setSwitchOffice(this.reverse)
    this.reverse = !this.reverse
  }

  editText() {
    return (this.reverse) ? 'Manage My Post' : 'Global Feeds'
  }

  readForm(value: string | undefined) {
    this.fillFilterPost(value)
    this.searchValue = ''
  }
}
