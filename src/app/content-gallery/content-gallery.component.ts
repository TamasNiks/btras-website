import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content-gallery",
  templateUrl: "./content-gallery.component.html",
  styleUrls: ["./content-gallery.component.scss"],
})
export class ContentGalleryComponent implements OnInit {
  public images = [
    {
      title: "Nobel",
      subtitle: "Photo by",
      url: "../../assets/musicon_2.jpg",
    },
    {
      title: "Musicon",
      subtitle: "Photo by",
      url: "../../assets/musicon_3.jpg",
    },
    {
      title: "Test",
      subtitle: "",
      url: "../../assets/musicon_3.jpg",
    },
    {
      title: "Test",
      subtitle: "",
      url: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
    },
    {
      title: "Test",
      subtitle: "",
      url: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
    },
    {
      title: "Test",
      subtitle: "",
      url: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
