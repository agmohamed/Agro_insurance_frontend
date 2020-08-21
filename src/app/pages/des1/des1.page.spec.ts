import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Des1Page } from './des1.page';

describe('Des1Page', () => {
  let component: Des1Page;
  let fixture: ComponentFixture<Des1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Des1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Des1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
