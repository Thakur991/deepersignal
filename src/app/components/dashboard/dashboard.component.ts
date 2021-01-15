import { Component, ViewChild, OnInit} from '@angular/core';
import { ApiService } from "src/app/core/services/api.service"
import { SharedService } from "src/app/core/services/shared.service"
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public userInfo: any ;
  public userGraph: any;
  public graph: boolean = false;
  public users: boolean = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
     scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
                  stepSize: 20,

               },
               gridLines: {
                  borderDash: [2, 2],
                  color: 'rgba(255, 255, 255, 0.2)',
               },

            },
         ],
      },
  };
  public barChartLabels: Label[] = ['Driver', 'Agreeableness', 'Luck', 'Openess'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [20,40,60,80], label: 'Analytics' },
  ];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
  	this.getUser();
  }

  getUser(){
    this._apiService.getUserInfo().subscribe(res=>{
      this.graph = false;
      this.users = true;
      this.userInfo = res;
    }, err=>{
      console.log(err)
    })
  }

  getGraphData(data){
    this._apiService.getGraphsData(data.id).subscribe(res=>{
      this.graph = true;
      this.users = false;
      this.userGraph = res.data;
      let data = Object.values(this.userGraph);
      this.barChartData = [
        { data: data, label: 'Analytics' },
      ];
    }, err=>{
      console.log(err)
    })
  }
}



