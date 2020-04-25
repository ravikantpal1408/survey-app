import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  surveyForUserModel: any[] = []

  checkedRadioSurveyOpt: string;

  constructor(private commonService: CommonService) { }


  ngOnInit() {
    console.log('uesr section : ', this.commonService.surveyData)

    this.surveyForUserModel = this.commonService.surveyData
  }


  submitSurvey() {
    console.log('submit click')
    alert('ok now submitting choosen value => ' + this.checkedRadioSurveyOpt)
    //
  }

  selectedSurveyOpt(event) {
    console.log('evenyt', event)

    console.log('bingo i chose one : ', event.target.value)
    this.checkedRadioSurveyOpt = event.target.value
  }

}
