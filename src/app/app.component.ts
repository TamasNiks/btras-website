import { ViewportScroller } from "@angular/common";
import { Component, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("btnBackToTop") mybutton: any;

  public title = "btras-website";

  constructor(private scroll: ViewportScroller) {}

  public clickedBackToTop(): void {
    this.scroll.scrollToPosition([0,0]);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: Event) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.mybutton.nativeElement.classList.remove("hidden");
    } else {
      this.mybutton.nativeElement.classList.add("hidden");
    }
  }
}
