import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-des3',
  templateUrl: './des3.page.html',
  styleUrls: ['./des3.page.scss'],
})
export class Des3Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/description']);
  }
}
