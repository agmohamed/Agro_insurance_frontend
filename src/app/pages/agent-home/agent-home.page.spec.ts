import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentHomePage } from './agent-home.page';

describe('AgentHomePage', () => {
  let component: AgentHomePage;
  let fixture: ComponentFixture<AgentHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
