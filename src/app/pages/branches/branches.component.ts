import { Component, OnInit } from '@angular/core';
import branchs from 'src/app/fils/branchs.json';




@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  
  branchsList:{id:bigint,branchName:string,closeAt:Date,openAt:Date}[]=branchs;  
  show: boolean = true ; // hidden by default

  constructor() { }
  ngOnInit(): void {
  }
  toggleShow() {
  this.show = !this.show;
  }

}
