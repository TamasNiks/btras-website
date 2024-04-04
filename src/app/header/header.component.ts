import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems = [
    { id: "home", name: "Home", route: ""},
    { id: "music", name: "Music", route: ""},
    { id: "live", name: "Live", route: ""},
    { id: "merch", name: "Merch", route: "https://shop.betweentheratsandsnakes.com/"},
    { id: "contact", name: "Contact", route: ""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
