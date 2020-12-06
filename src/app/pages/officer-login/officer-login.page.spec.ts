import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficerLoginPage } from './officer-login.page';

describe('OfficerLoginPage', () => {
  let component: OfficerLoginPage;
  let fixture: ComponentFixture<OfficerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
