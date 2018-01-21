// Library
import { Component } from "@angular/core";

// Services
import { KgBasicServices } from "../../shared/index";

@Component({
    selector: "kg-main",
    templateUrl: "kg-main.component.html",
    styleUrls: ["kg-main.component.scss"]
})
export class KgMainPageComponent {

    constructor(private kgBasicServices: KgBasicServices) {
        console.log(this.kgBasicServices.numberFormat(2));
    }

}
