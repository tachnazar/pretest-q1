import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'c-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selected = 'prime';
  result: boolean = false;
  number: any = "";
  constructor() { }

  ngOnInit(): void {
  }
  valuechange(event:any){
    this.number = parseInt(event) || 0;
    if(this.selected == "prime"){
      this.result = this.isPrime(this.number)
    }
    if(this.selected == "fibonacci"){
      this.result =  this.isFibonacci(this.number)
    }
    console.log(this.number)
  }
  selectHandler(event: MatSelectChange){
    if(event.value == "prime"){
      this.result =  this.isPrime(this.number)
    }
    if(event.value == "fibonacci"){
      this.result = this.isFibonacci(this.number)
    }
    console.log(event.value)
  }
  isPrime(num: number) {
    for (let i = 2; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
      if (i === 2) {
        i--;
      }
    }
    console.log(num)
    if(num>1){
      this.result = true;
    }
    return num > 1;
  }

  isFibonacci(num: number) {
    var [curr, next] = [0, 1];

    while (curr < num) {
      [curr, next] = [next, next + curr];
    }
    console.log(num)
    return num === curr;
  }
}
