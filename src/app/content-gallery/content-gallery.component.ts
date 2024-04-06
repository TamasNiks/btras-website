import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content-gallery",
  templateUrl: "./content-gallery.component.html",
  styleUrls: ["./content-gallery.component.scss"],
})
export class ContentGalleryComponent implements OnInit {
  public images = [
    {
      title: "Musicon",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/musicon_2.jpg",
    },
    {
      title: "Musicon",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/musicon_3.jpg",
    },
    {
      title: "Musicon",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/musicon_1.jpg",
    },
    {
      title: "Nobel",
      subtitle: "Photo by Coen Bastiaanssen",
      url: "assets/nobel_1.jpg",
    },
    {
      title: "Nobel",
      subtitle: "Photo by Coen Bastiaanssen",
      url: "assets/nobel_2.jpg",
    },
    {
      title: "Nobel",
      subtitle: "Photo by Coen Bastiaanssen",
      url: "assets/nobel_4.jpeg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
