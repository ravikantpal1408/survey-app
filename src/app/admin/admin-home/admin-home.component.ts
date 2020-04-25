import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      surveyAbout: [''],
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
    });
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          // email: ['', [Validators.required, Validators.email]]
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }


    this.commonService.surveyData.push(this.dynamicForm.value)

    console.log('admin section : ', this.commonService.surveyData)

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {

    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
  }

  onClear() {

    this.submitted = false;
    this.t.reset();
  }

}
