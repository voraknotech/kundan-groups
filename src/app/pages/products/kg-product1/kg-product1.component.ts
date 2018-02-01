import { Component, OnInit } from "@angular/core";

@Component({
  selector: "kg-product1",
  templateUrl: "kg-product1.component.html",
  styleUrls: ["kg-product1.component.css"]
})
export class KgProduct1Component implements OnInit {
  fileDetails: Array<any>;

  constructor() {}

  ngOnInit() {
    this.fileDetails = [
      {
        url:
          "https://drive.google.com/open?id=1d-C8JMkPVzucekBHUEUVKbsmDSp2yE5C",
        title: "Padlocks_Freedom",
        type: "btn btn-primary"
      },
      {
        url:
          "https://drive.google.com/open?id=1aiX7zrjQzX0FXG9J8ExCGZ4cTHRMvfR2",
        title: "Padlocks_Kadi-Tala_6levers",
        type: "btn btn-dark"
      },
      {
        url:
          "https://drive.google.com/open?id=1pZPeT5Au_lTpdNJqcrBnoz5SflAygOsB",
        title: "Padlocks_Myloc_SmallWonderSeries",
        type: "btn btn-primary"
      },
      {
        url:
          "https://drive.google.com/open?id=1kH1FivzOcbtOOrThi9-h5CTwuX9gk-sx",
        title: "Padlocks_Navtal",
        type: "btn btn-danger"
      },
      {
        url:
          "https://drive.google.com/open?id=1MONe2UH_6F1hLuICLM5c2knROBy0B4Tn",
        title: "Padlocks_SherlockSolidBrass",
        type: ""
      },
      {
        url:
          "https://drive.google.com/open?id=1isXSiu_OZNHPISqNS9S7w5IgjAgcov8Y",
        title: "Rakshak",
        type: "btn btn-primary"
      }
    ];
  }
}
