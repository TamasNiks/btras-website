import { Component, OnInit } from '@angular/core';

enum socialEnum {
  instagram = "instagram",
  facebook = "facebook",
  tiktok = "tiktok",
  spotify = "spotify",
  youtube = "youtube",
  appleMusic = "appleMusic",
}

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSocialLinkClick(icon: string): void {
    let url = "";
    switch (icon as socialEnum) {
      case socialEnum.instagram:
        url = "https://www.instagram.com/betweentheratsandsnakes/";
        break;
      case socialEnum.facebook:
        url = "https://www.facebook.com/BetweentheRatsandSnakes";
        break;
      case socialEnum.tiktok:
        url = "https://www.tiktok.com/@betweentheratsandsnakes";
        break;
      case socialEnum.spotify:
        url = "https://open.spotify.com/artist/71mU3UyTHM9R5CYlbubxL0?si=iygWkmrqR6SWaS_rg2O3-w";
        break;
      case socialEnum.youtube:
        url = "https://www.youtube.com/channel/UCebRKhaXrssVdPNDSxWq0OQ/featured";
        break;
      case socialEnum.appleMusic:
        url = "https://music.apple.com/us/artist/between-the-rats-and-snakes/1650027932";
        break;
    }
    window.open(url, "_blank");
  }
}
