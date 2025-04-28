import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {TokenStorageService} from '../../service/token-storage.service';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent implements OnInit {

  isLoggedIn: boolean = false;
  isDataLoaded: boolean = false;
  user!: User;
  isDarkMode: boolean = false;   

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getUserId();
    if (this.isLoggedIn) {
      this.userService.getUserProfile(this.tokenStorage.getUserId())
        .subscribe(data => {
          this.user = data;
          this.isDataLoaded = true;
        });
    }

    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark-theme') {
        document.body.classList.add('dark-theme');
        this.isDarkMode = true;
      }
    }

  }

  logout() {
    this.tokenStorage.logOut();
    this.router.navigate(['/login']);
  }

  toggleTheme(): void {
    if (typeof window !== 'undefined') {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', '');
        this.isDarkMode = false;
      } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        this.isDarkMode = true;
      }
    }

  }

}
