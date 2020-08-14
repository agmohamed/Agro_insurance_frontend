import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AaibPage } from './aaib.page';

describe('AaibPage', () => {
  let component: AaibPage;
  let fixture: ComponentFixture<AaibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaibPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AaibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
