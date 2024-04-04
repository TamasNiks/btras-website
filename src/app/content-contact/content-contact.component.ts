import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content-contact",
  templateUrl: "./content-contact.component.html",
  styleUrls: ["./content-contact.component.scss"],
})
export class ContentContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public downloadPressKit(): void {
    let link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = "assets/betweentheratsandsnakes_presskit.zip";
    link.download = "betweentheratsandsnakes_presskit.zip";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
