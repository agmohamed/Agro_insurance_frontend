import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Organizationtab1Page } from './organizationtab1.page';

describe('Organizationtab1Page', () => {
  let component: Organizationtab1Page;
  let fixture: ComponentFixture<Organizationtab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Organizationtab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Organizationtab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
