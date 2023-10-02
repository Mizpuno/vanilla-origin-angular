import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit { 
  isBackOffice = false

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getSwitchOffice().subscribe((data) => {
      this.isBackOffice = data;
    })
  }
}
