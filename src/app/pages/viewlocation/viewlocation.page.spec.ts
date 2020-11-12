import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewlocationPage } from './viewlocation.page';

describe('ViewlocationPage', () => {
  let component: ViewlocationPage;
  let fixture: ComponentFixture<ViewlocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewlocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
