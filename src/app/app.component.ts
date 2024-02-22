import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './pipes/convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    ConvertPipe,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;
  height: number | undefined;
  miles: number | undefined;

  car = {
    make: 'Toyota',
    model: 'Supra',
    year: 1994
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

  onNameChange(value: string){
    this.name = value;
  }

  onDateChange(value: string){
    this.date = value;
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }
}
