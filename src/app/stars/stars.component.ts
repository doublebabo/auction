import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges{
  @Input()
  private rating = 0;
  private stars: boolean[];

  @Input()
  isReadonly: boolean;

  @Output()
  ratingChanges: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // this.stars = [];
    // for (let i = 1 ; i <= 5; i++) {
    //   this.stars.push( i > this.rating);
    // }
    // this.rating = this.newRating;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1 ; i <= 5; i++) {
      this.stars.push( i > this.rating);
    }
  }




  selectStarts(index) {
    if (!this.isReadonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChanges.emit(this.rating);
    }
  }



}
