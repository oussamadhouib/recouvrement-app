import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteList = [];
  id : any;

  constructor(private compteService : CompteService , private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.getCompte(this.id);
    this.reloadData();
  }
  reloadData() {
    this.compteService.getAllComptes(this.id).subscribe(
      result =>{
        this.compteList = result;

      },
      error=>{
        console.log(error);

      }
    )
  }
  
  getCompte(id) {
    this.compteService.getAllComptes(id).subscribe(
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
