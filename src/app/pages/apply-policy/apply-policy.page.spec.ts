import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyPolicyPage } from './apply-policy.page';

describe('ApplyPolicyPage', () => {
  let component: ApplyPolicyPage;
  let fixture: ComponentFixture<ApplyPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
