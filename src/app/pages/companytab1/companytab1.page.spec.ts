import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Companytab1Page } from './companytab1.page';

describe('Companytab1Page', () => {
  let component: Companytab1Page;
  let fixture: ComponentFixture<Companytab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Companytab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Companytab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
