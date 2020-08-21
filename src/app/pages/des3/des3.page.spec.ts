import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Des3Page } from './des3.page';

describe('Des3Page', () => {
  let component: Des3Page;
  let fixture: ComponentFixture<Des3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Des3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Des3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
