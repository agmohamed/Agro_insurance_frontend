import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Companytab3Page } from './companytab3.page';

describe('Companytab3Page', () => {
  let component: Companytab3Page;
  let fixture: ComponentFixture<Companytab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Companytab3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Companytab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
