import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export enum TimePickerType {
  AnalogClock = 'Analogo',
  AnalogClockTwo = 'Analogo 2',
  AnalogClockThree = 'Analogo 3',
  Casio = 'Casio',
  ClockDigitalOne = 'Reloj digital',
  ClockDigitalTwo = 'Reloj digital 2',
  ClockDigitalThree = 'Reloj digital 3',
  ClockDigitalFour = 'Reloj digital 4',
  ClockDigitalFive = 'Reloj digital 5',
  ClockDigitalSix = 'Reloj digital 6'
}

import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { AnalogClockTwoComponent } from '../analog-clock-two/analog-clock-two.component';
import { AnalogClockThreeComponent } from '../analog-clock-three/analog-clock-three.component';
import { CasioComponent } from '../casio/casio.component';
import { ClockDigitalOneComponent } from '../clock-digital-one/clock-digital-one.component';
import { ClockDigitalTwoComponent } from '../clock-digital-two/clock-digital-two.component';
import { ClockDigitalThreeComponent } from '../clock-digital-three/clock-digital-three.component';
import { ClockDigitalFourComponent } from '../clock-digital-four/clock-digital-four.component';
import { ClockDigitalFiveComponent } from '../clock-digital-five/clock-digital-five.component';
import { ClockDigitalSixComponent } from '../clock-digital-six/clock-digital-six.component';

@Component({
  selector: 'time-picker',
  standalone: true,
  imports: [
    CommonModule,
    AnalogClockComponent,
    AnalogClockTwoComponent,
    AnalogClockThreeComponent,
    CasioComponent,
    ClockDigitalOneComponent,
    ClockDigitalTwoComponent,
    ClockDigitalThreeComponent,
    ClockDigitalFourComponent,
    ClockDigitalFiveComponent,
    ClockDigitalSixComponent
  ],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnChanges {
  @Input() type: TimePickerType = TimePickerType.AnalogClock;
  @Input() customTime?: string | Date;

  parsedCustomTime: Date | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customTime'] && changes['customTime'].currentValue) {
      this.parsedCustomTime = new Date(changes['customTime'].currentValue);
    }
  }

  TimePickerType = TimePickerType;
}