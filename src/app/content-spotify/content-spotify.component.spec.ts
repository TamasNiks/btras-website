import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSpotifyComponent } from './content-spotify.component';

describe('ContentSpotifyComponent', () => {
  let component: ContentSpotifyComponent;
  let fixture: ComponentFixture<ContentSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSpotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
