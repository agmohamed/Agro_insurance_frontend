import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aaibtab4Page } from './aaibtab4.page';

describe('Aaibtab4Page', () => {
  let component: Aaibtab4Page;
  let fixture: ComponentFixture<Aaibtab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aaibtab4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aaibtab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
