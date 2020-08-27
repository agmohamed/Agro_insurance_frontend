import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivePolicyPage } from './active-policy.page';

describe('ActivePolicyPage', () => {
  let component: ActivePolicyPage;
  let fixture: ComponentFixture<ActivePolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivePolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
