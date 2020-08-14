import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-insurance-compnay',
  templateUrl: './insurance-compnay.page.html',
  styleUrls: ['./insurance-compnay.page.scss'],
})
export class InsuranceCompnayPage implements OnInit {

  constructor( private router:Router,) { }

  ngOnInit() {
  }
  tryLogin1(){
    this.router.navigate(['/home']);
  }
  back(){
    this.router.navigate(['/login']);
  }
}
