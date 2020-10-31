import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Companytab2Page } from './companytab2.page';

describe('Companytab2Page', () => {
  let component: Companytab2Page;
  let fixture: ComponentFixture<Companytab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Companytab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Companytab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
