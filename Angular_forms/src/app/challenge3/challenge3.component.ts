import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})
export class Challenge3Component {
first:any
email:any

numero:any
carte:any
date:any
userForm:any

print(userForm:any){
  var data=userForm.value
  console.log(data)
}


}
