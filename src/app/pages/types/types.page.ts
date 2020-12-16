import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
})
export class TypesPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  //navigate to view insurance companies
  gopage(){
    this.router.navigate(['/insurance-compnay']);
  }
  back(){

    this.router.navigate(['/login']);
  }
 
}
