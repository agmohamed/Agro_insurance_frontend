import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentVerificationPage } from './agent-verification.page';

describe('AgentVerificationPage', () => {
  let component: AgentVerificationPage;
  let fixture: ComponentFixture<AgentVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
