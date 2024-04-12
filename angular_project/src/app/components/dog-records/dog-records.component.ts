import { Component, OnInit } from '@angular/core';
import { Dog } from '../../entities/dog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog-records',
  templateUrl: './dog-records.component.html',
  styleUrls: ['./dog-records.component.css']
})
export class DogRecordsComponent implements OnInit {

  listed : Array<any> = new Array<any>;
  examiningList : Array<any> = new Array<any>;
  finalList : Array<any> = new Array<any>;
  public newDog:any = "";
  constructor() { }

  ngOnInit() {
  }

  addDog(){
    
      this.listed.push({
        Id: Math.random() + 1,
        Name: this.newDog,
        Status : "listed"
      });
      this.newDog = "";
  }
  addToExamine(item:Dog){

    this.listed = this.listed.filter(p=> p.Id != item.Id);
    item.Status = "examined";
    this.examiningList.push(item);
  }
  addToFinal(item:Dog){

    this.examiningList = this.examiningList.filter(p=> p.Id != item.Id);
    item.Status = "final";
    this.finalList.push(item);
  }
}
