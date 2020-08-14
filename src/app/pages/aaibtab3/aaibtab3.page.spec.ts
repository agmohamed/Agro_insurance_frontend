import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aaibtab3Page } from './aaibtab3.page';

describe('Aaibtab3Page', () => {
  let component: Aaibtab3Page;
  let fixture: ComponentFixture<Aaibtab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aaibtab3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aaibtab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
