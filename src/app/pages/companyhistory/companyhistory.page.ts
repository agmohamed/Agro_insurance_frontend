import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-companyhistory',
  templateUrl: './companyhistory.page.html',
  styleUrls: ['./companyhistory.page.scss'],
})
export class CompanyhistoryPage implements OnInit {
  @ViewChild("barCanvas1",{ static: true }) barCanvas1: ElementRef;
  @ViewChild("barCanvas2",{ static: true }) barCanvas2: ElementRef;
 @ViewChild("lineCanvas") lineCanvas: ElementRef;
  request: string = "history";
  private barChart1: Chart;
  private lineChart: Chart;
  private barChart2: Chart;
  arr1:any;
  arr2:any;
  arr3:any; arr4:any;
  id:any;
  constructor(private router:Router, private storage:Storage,public http:HttpClient,
    private toastCtrl:ToastController, private navCtrl:NavController) {
      this.storage.get('storage_company').then((res)=>{
        this.id=res.id;
        this.getAllActivepolicy();
        this.getAllActiveclaims();
      })
    }
    
  ngOnInit() {
  }


  barChartMethod1() {
    this.barChart1= new Chart(this.barCanvas1.nativeElement, {
      type: "bar",
      data: {
        labels:this.arr2,
        datasets: [
          {
            label: "Amount for each crop",
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
  barChartMethod2() {
    this.barChart2= new Chart(this.barCanvas2.nativeElement, {
      type: "bar",
      data: {
        labels:this.arr4,
        datasets: [
          {
            label: "# of active claims",
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

  getAllActivepolicy(){
    this.http.get(AccessProviders.server+'/getactivePolicydetails/'+this.id).subscribe((res:any)=>{ 
      console.log( res);
          this.arr1=res.data;
          this.arr2=res.label;
          console.log( this.arr1+ this.arr2);
          this.barChartMethod1();
          
       })
      
  }
  getAllActiveclaims(){
    this.http.get(AccessProviders.server+'/allActiveclaimsforCompany/'+this.id).subscribe((res:any)=>{ 
      console.log( res);
          this.arr3=res.data;
          this.arr4=res.label;
          console.log( this.arr1+ this.arr2);
          this.barChartMethod2();
          
       })
      
  }
  
}
