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
        url = "https://open.spotify.com/track/7gAvk3fVd5PwAMJcpGYlc5?si=4f8a764b47e94eab";
        break;
      case socialEnum.youtube:
        url = "https://www.youtube.com/channel/UCebRKhaXrssVdPNDSxWq0OQ/featured";
        break;
      case socialEnum.appleMusic:
        url = "https://music.apple.com/us/album/the-prophet/1684824201?i=1684824202";
        break;
    }
    window.open(url, "_blank");
  }
}
