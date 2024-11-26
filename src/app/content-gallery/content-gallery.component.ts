import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-content-gallery",
  templateUrl: "./content-gallery.component.html",
  styleUrls: ["./content-gallery.component.scss"],
})
export class ContentGalleryComponent implements OnInit {

  @ViewChild("modal") modal: any;
  @ViewChild("modalImg") modalImg: any;

  public imageHeader = [
    {
      id: "imgAll",
      title: "Musicon",
      subtitle: "Photo by Megan Keijzer",
      url: "assets/M_ALL_1.JPG",
    },
  ]

  public images = [
    {
      id: "img1",
      title: "Sounddog",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/SD_J_1.JPG",
    },
    {
      id: "img2",
      title: "Sounddog",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/SD_P_1.JPG",
    },
    {
      id: "img3",
      title: "Sounddog",
      subtitle: "Photo by sethpicturesmusic",
      url: "assets/SD_T_1.JPG",
    },
    {
      id: "img4",
      title: "Musicon",
      subtitle: "Photo by Megan Keijzer",
      url: "assets/M_J_1.JPG",
    },
    {
      id: "img5",
      title: "Musicon",
      subtitle: "Photo by Megan Keijzer",
      url: "assets/M_T_1.JPG",
    },
    {
      id: "img6",
      title: "Musicon",
      subtitle: "Photo by Megan Keijzer",
      url: "assets/M_P_1.JPG",
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
