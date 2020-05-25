import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientsList = [];


  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.reloadData();
    
  }
  reloadData() {
    this.clientService.getAllClients().subscribe(
      result =>{
        this.clientsList = result;

      },
      error=>{
        console.log(error);

      }
    )
  }
  delete(client) {
    this.clientService.deleteClient(client.id).subscribe(
      result =>{
        console.log(result);
        this.reloadData();

      },
      error=>{
        console.log(error);

      }
    )
  }

}
 