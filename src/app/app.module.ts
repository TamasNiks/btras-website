import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentHeroComponent } from './content-hero/content-hero.component';
import { ContentMusicComponent } from './content-music/content-music.component';
import { ContentLiveComponent } from './content-live/content-live.component';
import { ContentContactComponent } from './content-contact/content-contact.component';
import { ContentGalleryComponent } from './content-gallery/content-gallery.component';
import { SharedModule } from './shared/shared.module';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ContentSpotifyComponent } from './content-spotify/content-spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentHeroComponent,
    ContentMusicComponent,
    ContentLiveComponent,
    ContentContactComponent,
    ContentGalleryComponent,
    SocialLinksComponent,
    ContentSpotifyComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
