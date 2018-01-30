// Library
import { Component } from "@angular/core";

@Component({
  selector: "kg-header",
  templateUrl: "kg-header.component.html",
  styleUrls: ["kg-header.component.css"]
})
export class KgHeaderComponent {
  private visibleMenu: boolean;
  clicked(event) {
    if (event.target.tagName === 'A') {
      event.target.classList.toggle('active'); // To ADD
      this.visibleMenu = !this.visibleMenu;
    }
  }
}
