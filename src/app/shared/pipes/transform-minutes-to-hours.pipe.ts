import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformMinutesToHours',
})
export class TransformMinutesToHoursPipe implements PipeTransform {
  transform(time: number) {
    const hour = 60;
    const minutesToHours: number = Math.floor((time * 1) / hour);
    const justMinutes = Math.floor(((time * 1) / hour - minutesToHours) * hour);
    if (time > hour && justMinutes !== 0) {
      return `${minutesToHours} h. ${justMinutes} min.`;
    } else if (time >= hour && justMinutes === 0) {
      return `${minutesToHours} h.`;
    } else {
      return `${time} min.`;
    }
  }
}
