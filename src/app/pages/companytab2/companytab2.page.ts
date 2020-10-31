import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-companytab2',
  templateUrl: './companytab2.page.html',
  styleUrls: ['./companytab2.page.scss'],
})
export class Companytab2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  update(){
    this.router.navigate(['/update']);
  }
}
