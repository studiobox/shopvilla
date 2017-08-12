import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  socialIcons: any = [];
  userIcons: any = [];
  constructor() { }

  ngOnInit() {
    this.socialIcons = [
      { title: 'facebook', url: 'http://facebook.com', iconClass: 'icon-facebook' },
      { title: 'twitter', url: 'http://twitter.com', iconClass: 'icon-twitter' },
      { title: 'instagram', url: 'http://instagram.com', iconClass: 'icon-instagram' }
    ];

    this.userIcons = [
      { title: 'account', url: '/dashboard', iconClass: 'icon-user' },
      { title: 'wishlist', url: '/wishlist', iconClass: 'icon-heart' },
      { title: 'login', url: '/login', iconClass: 'icon-lock' }
    ];
  }

}
