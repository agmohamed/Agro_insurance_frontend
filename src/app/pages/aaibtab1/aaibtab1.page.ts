import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aaibtab1',
  templateUrl: './aaibtab1.page.html',
  styleUrls: ['./aaibtab1.page.scss'],
})
export class Aaibtab1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/login']);
  }
}
