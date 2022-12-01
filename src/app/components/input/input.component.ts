import { Component } from "@angular/core";
import { MainService } from "src/app/services/main.service";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent{
    public name!: string;
    constructor(private mainService: MainService){
        // setTimeout(()=>{
        // console.log(mainService.data)

        // },5000)
    }
    addItem(name: string){ 
        this.mainService.addData(name);
    }
}

