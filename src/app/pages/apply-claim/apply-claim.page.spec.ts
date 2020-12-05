import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyClaimPage } from './apply-claim.page';

describe('ApplyClaimPage', () => {
  let component: ApplyClaimPage;
  let fixture: ComponentFixture<ApplyClaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyClaimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
