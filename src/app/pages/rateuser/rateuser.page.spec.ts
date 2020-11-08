import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateuserPage } from './rateuser.page';

describe('RateuserPage', () => {
  let component: RateuserPage;
  let fixture: ComponentFixture<RateuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
