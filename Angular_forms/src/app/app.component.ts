import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: any
  title: any
  myform: any
  firstname: any
  lastname: any
  type: any
  constructor(private formbuilder: FormBuilder) {

    this.myform = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: this.formbuilder.array([
        this.formbuilder.group({
          id: ['1'],
          title:['']
        }),

       this.formbuilder.group({
         id: ['2'],
         title: ['']
        }) 


      ])
    })





  }

  print() {
    console.log(this.myform)
  }
  get name() {
    return this.myform.get('name')
  }
  get age() {
    return this.myform.get('age')
  }
  get email() {
    return this.myform.get('email')
  }

get details(){
  return this.myform.get('details') as FormArray
}

newInput(){
  let newRows=this.formbuilder.group({
    id: [],
    title: []
  })
  this.details.push(newRows)
}
delete(i:any){
this.details.removeAt(i)
}






  //code for Template Driven Forms 
 // add(f: any) {
 //   let data = f.value
  //  console.log(data)
 // }
}
