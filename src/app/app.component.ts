import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'date-range-picker';

  selectedDates: DateRange<Date> | null = null;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  firstCalendarViewData = { startDate: new Date() };
  secondCalendarViewData = { startDate: new Date(new Date().setMonth(new Date().getMonth() + 1)) };

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  updateDateRangeSelection(date: Date | null): void {
    if (!date) return;
    // Consolidated logic for range selection
    if (!this.selectedDates || (this.selectedDates.start && this.selectedDates.end) || (this.selectedDates.start && date < this.selectedDates.start)) {
      this.selectedDates = new DateRange<Date>(date, null);
    } else {
      this.selectedDates = new DateRange<Date>(this.selectedDates.start, date);
    }
  }
}


