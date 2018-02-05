import { Component } from "@angular/core";

@Component({
  selector: "kg-contact",
  templateUrl: "kg-contact.component.html",
  styleUrls: ["kg-contact.component.css"]
})
export class KgContactComponent {
  latitude: number = 26.790934;
  longitude: number = 83.355618;
  zoom: number = 16;
}
