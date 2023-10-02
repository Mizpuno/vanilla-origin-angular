import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent {
  constructor (
    private dataService: DataService
  ) {}

  fillCommunity(community: string | undefined): void {
    this.dataService.setCommunity(community)
  }
}
