import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuranceCompnayPage } from './insurance-compnay.page';

describe('InsuranceCompnayPage', () => {
  let component: InsuranceCompnayPage;
  let fixture: ComponentFixture<InsuranceCompnayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCompnayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceCompnayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
