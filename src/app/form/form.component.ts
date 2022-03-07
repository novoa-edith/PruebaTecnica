import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { club } from '../data/clubes';
import { generos } from '../data/generos';
import { nacionalidades } from '../data/nacionalidades';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genero:any[]=generos;
  nacionalidad:any[] = nacionalidades;
  clubFutbol:any[] = club;  
  
  step: any = 1;
  submitted: any = false;
  multistep = new FormGroup({
       userDetails:      new FormGroup({
          nombre:       new FormControl('',),
          apPaterno:    new FormControl('',),
          apMaterno:    new FormControl('',),
          fecha :       new FormControl('',),
          genero:       new FormControl('',),
          nacionalidad: new FormControl('',),
          club:         new FormControl('',),
          rfc:          new FormControl('',),
          ocupacion:    new FormControl('',)

       })
  })
  
  dataForm: FormGroup;
  constructor(private route: Router) {
    this.dataForm = this.multistep;
  }

  ngOnInit(): void {
  }

  get userDetails() {
        return this.multistep.controls['userDetails']['controls'];
  }


  submit() {  
      this.submitted = true;
      if(this.multistep.controls.userDetails.invalid && this.step == 1) {
        return;
      }
      this.step = this.step + 1;
  }

  generarPDF(){
    const doc = new jsPDF;
    const arreglo = [];
    for(let element in this.dataForm.value.userDetails){
      let columna = `\n${element}: ${this.dataForm.value.userDetails[element]}\n`;
      arreglo.push(columna + '\n');
    }

    for (let i = 0; i < arreglo.length; i++) {
      const element = arreglo[i];

      doc.text(element,i+10,i+10);
      doc.addPage();
    }
    doc.save("registro.pdf");

  }

  previous() {
    this.step = this.step - 1;
  }



}