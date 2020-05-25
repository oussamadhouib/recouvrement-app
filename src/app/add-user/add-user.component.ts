import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Client} from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  myForm :FormGroup

  constructor(private fb:FormBuilder , private clientService:ClientService) { 
    let formControls = {
      codeClient : new FormControl(),
      idDouane : new FormControl(),
      firstName : new FormControl(),
      secondName : new FormControl(),
      addresse : new FormControl(),
      ville : new FormControl(),
      codePostal : new FormControl(),
      matFiscale : new FormControl(),
      tel : new FormControl(),
      fax : new FormControl(),
      email : new FormControl()

    }
    this.myForm = this.fb.group(formControls);
  }
  get codeClient() {return this.myForm.get('codeClient')}
  get idDouane() {return this.myForm.get('idDouane')}
  get firstName() {return this.myForm.get('firstName')}
  get secondName() {return this.myForm.get('secondName')}
  get addresse() {return this.myForm.get('addresse')}
  get ville() {return this.myForm.get('ville')}
  get codePostal() {return this.myForm.get('codePostal')}
  get matFiscale() {return this.myForm.get('matFiscale')}
  get tel() {return this.myForm.get('tel')}
  get fax() {return this.myForm.get('fax')}
  get email() {return this.myForm.get('email')}
  

  ngOnInit() {
  }
  createClient(){
    let data = this.myForm.value;

    let client = new Client(data.codeClient,data.idDouane,data.firstName,data.secondName,data.addresse,data.ville,data.codePostal,data.matFiscale,data.tel,data.fax,data.email);
    
    this.clientService.createClient(client).subscribe(
      res => {
        console.log('sucsses');

      },
      err=> {
        console.log(err);

      }
    )
  }

}
