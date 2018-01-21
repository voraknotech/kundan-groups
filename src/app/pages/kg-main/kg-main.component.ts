//Library
import { Component } from '@angular/core';

//Services
import { KgBasicServices } from '../../services/kg-basicServices.service'

@Component({
    selector: "kg-main",
    templateUrl: "kg-main.component.html",
    styleUrls: ["kg-main.component.scss"]
})
export class KgMainPage {

    constructor(private kgBasicServices: KgBasicServices) {
        console.log(this.kgBasicServices.numberFormat(2));
    }

}