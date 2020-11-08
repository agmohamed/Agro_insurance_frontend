import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Companytab4Page } from './companytab4.page';

describe('Companytab4Page', () => {
  let component: Companytab4Page;
  let fixture: ComponentFixture<Companytab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Companytab4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Companytab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
