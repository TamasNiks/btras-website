import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMusicComponent } from './content-music.component';

describe('ContentMusicComponent', () => {
  let component: ContentMusicComponent;
  let fixture: ComponentFixture<ContentMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
