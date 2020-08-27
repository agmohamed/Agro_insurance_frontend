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
  gopage(){
    this.router.navigate(['/insurance-compnay']);
  }
 
}
