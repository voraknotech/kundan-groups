// Library
import { Component } from "@angular/core";

@Component({
  selector: "kg-header",
  templateUrl: "kg-header.component.html",
  styleUrls: ["kg-header.component.css"]
})
export class KgHeaderComponent {
  visibleMenu: boolean;
  shouldShow: boolean = false;

  clicked(event) {
    if (event.target.nodeName === "I") {
      this.shouldShow = !this.shouldShow; // To ADD
      this.visibleMenu = !this.visibleMenu;
    } else {
      this.shouldShow = !this.shouldShow;
      this.visibleMenu = !this.visibleMenu;
    }
  }
  hideMenu(event) {
    this.visibleMenu = false;
    this.shouldShow = !this.shouldShow;
  }
}
