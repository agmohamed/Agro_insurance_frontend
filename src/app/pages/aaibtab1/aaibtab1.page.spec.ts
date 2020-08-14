import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aaibtab1Page } from './aaibtab1.page';

describe('Aaibtab1Page', () => {
  let component: Aaibtab1Page;
  let fixture: ComponentFixture<Aaibtab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aaibtab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aaibtab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
