import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 back(){
    this.router.navigate(['/home/tab2']);
  }
}
