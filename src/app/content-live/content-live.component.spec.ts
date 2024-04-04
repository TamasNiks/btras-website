import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLiveComponent } from './content-live.component';

describe('ContentLiveComponent', () => {
  let component: ContentLiveComponent;
  let fixture: ComponentFixture<ContentLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
