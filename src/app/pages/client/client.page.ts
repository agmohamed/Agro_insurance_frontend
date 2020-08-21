import { Component, OnInit } from '@angular/core';
import { IonicRatingModule } from 'ionic-rating';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/aaib/aaibtab4']);
  }
}
