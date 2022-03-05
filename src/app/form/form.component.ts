import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { club } from '../data/clubes';
import { generos } from '../data/generos';
import { nacionalidades } from '../data/nacionalidades';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genero:any[]=generos;
  nacionalidad:any[] = nacionalidades;
  clubFutbol:any[] = club;  
  
  datos: any;
  step: any = 1;
  submitted: any = false;
  multistep = new FormGroup({
       userDetails:      new FormGroup({
           nombre:       new FormControl(''),
           apPaterno:    new FormControl(''),
           apMaterno:    new FormControl(''),
           fecha :       new FormControl(''),
           genero:       new FormControl(''),
           nacionalidad: new FormControl(''),
           club:         new FormControl(''),
           rfc:          new FormControl(''),
           ocupacion:    new FormControl('')
          // nombre:       new FormControl('', Validators.required),
          // apPaterno:    new FormControl('', Validators.required),
          // apMaterno:    new FormControl('', Validators.required),
          // fecha :       new FormControl('', Validators.required),
          // genero:       new FormControl('', Validators.required),
          // nacionalidad: new FormControl('', Validators.required),
          // club:         new FormControl('', Validators.required),
          // rfc:          new FormControl('', Validators.required),
          // ocupacion:    new FormControl('', Validators.required)
       }),

       contactDetails: new FormGroup({
        email: new FormControl('',Validators.required),
        address: new FormControl(''),
        contactNumber: new FormControl(''),
    }),
    
    personalDetails: new FormGroup({
      gender: new FormControl('null'),
      education: new FormControl('')
  })
  })
  
  dataForm: FormGroup;
  constructor(private route: Router) {
    this.dataForm = this.multistep;
  }

  ngOnInit(): void {
  }

  // onSaveForm(){
  //   console.log('Saved', this.dataForm.value.userDetails);
  //   const d = this.dataForm.value.userDetails;
  // }

  get userDetails() {
        return this.multistep.controls['userDetails']['controls'];
  }

  get contactDetails() {
    return this.multistep.controls['contactDetails']['controls'];
}

  submit() {  
      this.submitted = true;
      if(this.multistep.controls.userDetails.invalid && this.step == 1) {
        return;
      }
      if(this.multistep.controls.contactDetails.invalid && this.step == 2) {
        return;
      }
      this.step = this.step + 1;
      // if(this.step == 4) {
      //     this.route.navigate(['/thankyou'])
      // }
      console.log('Saved', this.dataForm.value.userDetails.nombre);
      this.datos = this.dataForm.value.userDetails;
  }

  previous() {
    this.step = this.step - 1;
  }



}