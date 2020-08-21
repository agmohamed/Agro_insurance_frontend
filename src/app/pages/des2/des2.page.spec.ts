import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Des2Page } from './des2.page';

describe('Des2Page', () => {
  let component: Des2Page;
  let fixture: ComponentFixture<Des2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Des2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Des2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
