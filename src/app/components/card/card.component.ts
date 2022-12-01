import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

    items: string[] = [];
    name: string = "";
    constructor(private mainService: MainService){
        
    }
    
    ngOnInit(){
        this.items = this.mainService.getData();
    }
}