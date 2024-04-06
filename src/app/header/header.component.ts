import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {

  public menuItems = [
    { id: "home", name: "Home", route: "#home" },
    { id: "music", name: "Music", route: "#music" },
    { id: "live", name: "Live", route: "#live" },
    {
      id: "merch",
      name: "Merch",
      route: "https://shop.betweentheratsandsnakes.com/",
    },
    { id: "contact", name: "Contact", route: "#contact" },
  ];
  public isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public onMenuToggle(): void {
    this.isOpen = !this.isOpen;
  }

}
