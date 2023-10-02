import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User | undefined
  logStat: string = 'login'

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('currentUser')
    if (userData) {
      this.logStat = 'logout'
      this.currentUser = JSON.parse(userData)
    }
  }

  logoutFunction() {
    localStorage.clear()
    this.logStat = 'login'
    this.dataService.setLogoutState(true)
    

    Swal.fire({
      position: 'top',
      title: 'Logging Out ...',
      text: "Please waiting for our process",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

}
