import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html'
})
export class PipeComponent {
  title: string = 'Pipes in Angular';

  // Date
  toDate: Date = new Date();

  //Currency
  itemPrice: number = 5.50;

  //Slice
  Users:any=['Rajesh','Amit','Pramod','Shantanu'];

  //Decimal 
   myNum1: number = 7.123;
   myNum2: number = 123.123456789;

   //Case(lower and upper)
   convertText='Rajesh';

   //Percent
   numA: number = 0.349;
   numB: number = 2.4595;

   //JSON
  objectName :any = {
    name:'Rajesh',
    comp:'ITC'
  }

}