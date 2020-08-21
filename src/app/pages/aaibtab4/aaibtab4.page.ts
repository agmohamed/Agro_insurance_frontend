import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aaibtab4',
  templateUrl: './aaibtab4.page.html',
  styleUrls: ['./aaibtab4.page.scss'],
})
export class Aaibtab4Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  go(){
    this.router.navigate(['/client']);
  }
}
