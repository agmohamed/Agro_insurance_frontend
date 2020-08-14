import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aaibtab2Page } from './aaibtab2.page';

describe('Aaibtab2Page', () => {
  let component: Aaibtab2Page;
  let fixture: ComponentFixture<Aaibtab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aaibtab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aaibtab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
