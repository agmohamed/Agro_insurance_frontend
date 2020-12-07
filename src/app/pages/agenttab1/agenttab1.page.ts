import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

import { Chart } from 'chart.js';
@Component({
  selector: 'app-agenttab1',
  templateUrl: './agenttab1.page.html',
  styleUrls: ['./agenttab1.page.scss'],
})
export class Agenttab1Page implements OnInit {

  agent_id:any;
  datastorage:any;
  id:any;
  data:any;
  arr1:any;
  arr2:any;
  arr3:any;
  arr4:any;
  @ViewChild("barCanvas",{ static: true }) barCanvas: ElementRef;
  @ViewChild("barCanvas2",{ static: true }) barCanvas2: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  request: string = "history";
  private barChart: Chart;
  private lineChart: Chart;
  private barChart2: Chart;
  constructor(private router:Router, private storage:Storage,public http:HttpClient,
    private toastCtrl:ToastController, private navCtrl:NavController) {

    this.storage.get('storage_agent').then((res)=>{
      console.log(res);
      this.datastorage=res;
      this.id=this.datastorage.company_id;
      this.agent_id= this.datastorage.id;
      console.log(this.id);
      console.log(this.agent_id);
     this.getpolicy();
     this.getAllpolicy();
     this.getAllActivepolicy();
    });
   }




  ngOnInit() {
    
  }
  barChartMethod1() {
    this.barChart= new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels:this.arr2,
        datasets: [
          {
            label: "# of Applied Insurances",
            data:this.arr1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
  barChartMethod3() {
    this.barChart= new Chart(this.barCanvas2.nativeElement, {
      type: "bar",
      data: {
        labels:this.arr4,
        datasets: [
          {
            label: "Amount for active Insurances",
            data:this.arr3,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
  // barChartMethod2() {
  //   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
  //     type: "line",
  //     data: {
  //       labels: this.arr4,
  //       datasets: [
  //         {
  //           label: "My First dataset",
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: "rgba(75,192,192,0.4)",
  //           borderColor: "rgba(75,192,192,1)",
  //           borderCapStyle: "butt",
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: "miter",
  //           pointBorderColor: "rgba(75,192,192,1)",
  //           pointBackgroundColor: "#fff",
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //           pointHoverBorderColor: "rgba(220,220,220,1)",
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: this.arr3,
  //           spanGaps: false
  //         }
  //       ]
  //     }
  //   });
  // }
  

  getpolicy(){
    this.http.get(AccessProviders.server+'/policyapplyhistory/'+this.agent_id+'/'+this.id).subscribe((res:any)=>{ 
          this.data=res.message;
       })
      
  }
  getAllpolicy(){
    this.http.get(AccessProviders.server+'/applyAll/'+this.agent_id+'/'+this.id).subscribe((res:any)=>{ 
      console.log( res);
          this.arr1=res.data;
          this.arr2=res.label;
          console.log( this.arr1+ this.arr2);
          this.barChartMethod1();
          
       })
      
  }
  getAllActivepolicy(){
    this.http.get(AccessProviders.server+'/activeAll/'+this.agent_id+'/'+this.id).subscribe((res:any)=>{ 
      console.log( res);
          this.arr3=res.data;
          this.arr4=res.label;
          console.log( this.arr3+ this.arr4);
          //this.barChartMethod2();
          this.barChartMethod3();
          
       })
      
  }
}
