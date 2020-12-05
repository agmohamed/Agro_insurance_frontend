import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Organizationtab2Page } from './organizationtab2.page';

describe('Organizationtab2Page', () => {
  let component: Organizationtab2Page;
  let fixture: ComponentFixture<Organizationtab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organizationtab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Organizationtab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
