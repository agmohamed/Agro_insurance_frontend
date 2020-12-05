import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Agenttab1Page } from './agenttab1.page';

describe('Agenttab1Page', () => {
  let component: Agenttab1Page;
  let fixture: ComponentFixture<Agenttab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agenttab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Agenttab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
