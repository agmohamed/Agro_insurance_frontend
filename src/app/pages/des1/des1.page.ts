import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-des1',
  templateUrl: './des1.page.html',
  styleUrls: ['./des1.page.scss'],
})
export class Des1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/description']);
  }
}
