import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/home']);
  }
  go1(){
    this.router.navigate(['/des1']);
  }
  go2(){
    this.router.navigate(['/des2']);
  }
  go3(){
    this.router.navigate(['/des3']);
  }
}
