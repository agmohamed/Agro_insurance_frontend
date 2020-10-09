import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aaibtab2',
  templateUrl: './aaibtab2.page.html',
  styleUrls: ['./aaibtab2.page.scss'],
})
export class Aaibtab2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  update(){
    this.router.navigate(['/update']);
  }
}
