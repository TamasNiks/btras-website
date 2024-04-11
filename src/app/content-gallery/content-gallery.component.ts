import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-content-gallery",
  templateUrl: "./content-gallery.component.html",
  styleUrls: ["./content-gallery.component.scss"],
})
export class ContentGalleryComponent implements OnInit {

  @ViewChild("modal") modal: any;
  @ViewChild("modalImg") modalImg: any;

  public images = [
    {
      id: "img1",
      title: "Musicon",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/musicon_2.jpg",
    },
    {
      id: "img2",
      title: "Musicon",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/musicon_3.jpg",
    },
    {
      id: "img3",
      title: "Musicon",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/musicon_1.jpg",
    },
    {
      id: "img4",
      title: "Nobel",
      subtitle: "Photo by Coen Bastiaanssen",
      url: "assets/nobel_1.jpg",
    },
    {
      id: "img5",
      title: "Nobel",
      subtitle: "Photo by Coen Bastiaanssen",
      url: "assets/nobel_2.jpg",
    },
    {
      id: "img6",
      title: "Nobel",
      subtitle: "Photo by Coen Bastiaanssen",
      url: "assets/nobel_4.jpeg",
    },
  ];
  public isHidden: boolean = true;
  public selectedImage: {id: string, title: string, subtitle: string, url: string} = {id: "", title: "", subtitle: "", url: ""};

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.isHidden = true;
  }

  openModal(image: any): void {
    this.selectedImage = JSON.parse(JSON.stringify(image));
    this.isHidden = false;
  }
}
