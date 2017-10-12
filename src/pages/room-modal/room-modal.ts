import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ExamSheduleService } from '../../providers/exam-schedule';

/**
 * Generated class for the RoomModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'room-modal',
  templateUrl: 'room-modal.html'
})
export class RoomModalComponent {

  public listStudent: any;
  public idStudent: string;

  constructor(
    private _navParams: NavParams,
    private _examSheduleService: ExamSheduleService) {
  }
  public ionViewDidLoad() {
    let idClass = this._navParams.data.idClass;
    let room = this._navParams.data.room;
    this.idStudent = this._navParams.data.idStudent;
    this._examSheduleService.getRoom(idClass, room)
      .subscribe((response) => {
        if (response.result) {
          this.listStudent = response.data;
        }
      });
  }

}
