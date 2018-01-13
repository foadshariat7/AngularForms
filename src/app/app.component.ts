import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') inputForm: NgForm;
  defaultGender = "male";
  color='';
  animals=['dog', 'horse', 'cat', 'bee'];
  user= {
    username: '',
    email: '',
    gender: '',
    color: '',
    animal: ''
  }
  isSubmitted = false;

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onClick(){
    // this.inputForm.setValue({
    //   groupUser:{
    //     username: 'ali',
    //     email: ''
    //   },
    //   gender: '',
    //   color: '',
    //   animal: ''
    // });
    this.inputForm.form.patchValue({
      groupUser: {
        username: 'Foad'
      }
    });
  }

  onSubmit(){
    this.isSubmitted = true;
    this.user.username = this.inputForm.value.groupUser.username;
    this.user.email = this.inputForm.value.groupUser.email;
    this.user.gender = this.inputForm.value.gender;
    this.user.color = this.inputForm.value.color;
    this.user.animal = this.inputForm.value.animal;

    this.inputForm.reset();
  }
}
