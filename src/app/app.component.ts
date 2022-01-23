import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public userForm: FormGroup;
  constructor(private fb : FormBuilder){

  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name : [''],
      address : this.fb.array([])
    });
   
  }
  getAddress(){
    return this.userForm.get('address') as FormArray;
  }
  NewAddress(){
    return this.fb.group({
      address1:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required]
    })
  }
  addNewAdd(){
    this.getAddress().push(this.NewAddress())
  }
  submit(){
    console.log(this.userForm.value)
  }
}
