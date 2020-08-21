import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-des2',
  templateUrl: './des2.page.html',
  styleUrls: ['./des2.page.scss'],
})
export class Des2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/description']);
  }
}
