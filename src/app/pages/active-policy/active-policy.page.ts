import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-active-policy',
  templateUrl: './active-policy.page.html',
  styleUrls: ['./active-policy.page.scss'],
})
export class ActivePolicyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/home/tab2']);
  }
}
