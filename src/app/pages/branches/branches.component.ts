import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import branchs from 'D:/vac/vacApp/src/app/fils/branchs.json';




@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  
  branchsList:{id:bigint,branchName:string,closeAt:Date,openAt:Date}[]=branchs;

  constructor() { }

  ngOnInit(): void {
  }

}
