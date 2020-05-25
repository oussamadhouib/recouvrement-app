import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteList = [];

  constructor(private compteService : CompteService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.compteService.getAllComptes().subscribe(
      result =>{
        this.compteList = result;

      },
      error=>{
        console.log(error);

      }
    )
  }
  
  getCompte() {
    this.compteService.getAllComptes().subscribe(
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
