import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from "src/app/core/services/api.service"
import { SharedService } from "src/app/core/services/shared.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['FirstName', 'LastName', 'email', 'group'];
  dataSource = new MatTableDataSource<any>([]);;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private _SharedService: SharedService, private _ApiService: ApiService, private _router:Router) { }

  ngOnInit(): void {
  	this.getUserList();
  }

  getUserList(){
  	this._ApiService.getListsOfUser().subscribe(res=>{
  		this.dataSource.data = res;
  		this.dataSource.paginator = this.paginator;
  	},err=>{
  		console.log(err, "err")
  	})
  }
}

