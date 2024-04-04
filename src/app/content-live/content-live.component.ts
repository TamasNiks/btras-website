import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-content-live',
  templateUrl: './content-live.component.html',
  styleUrls: ['./content-live.component.scss']
})
export class ContentLiveComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `//widget-app.songkick.com/injector/10291503`;
    this.renderer.appendChild(document.head, script);
  }

}
