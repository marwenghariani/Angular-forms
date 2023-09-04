import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.css']
})
export class Challenge4Component {
code:any
  myform?: FormGroup
  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      info:new FormGroup({
        mycart: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        date:new FormControl('',Validators.required),
        code:new FormControl('',Validators.required)
      }),
    });

  }

  
  get name():any {
    return  this.myform?.get('name')
  }

  get email():any {
    return this.myform?.get('email')
  }


  get info(){
    return (this.myform?.get('info')  as FormGroup)
  }
  get mycart():any {
    return this.info.get('mycart')
  }
  get numero(){
    return this.info.get('numero')
  }
  get date(){
    return this.info.get('date')
  }

  print(){
    console.log(this.myform?.value)
  }
}