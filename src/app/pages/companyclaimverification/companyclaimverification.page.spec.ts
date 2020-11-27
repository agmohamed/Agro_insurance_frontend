import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyclaimverificationPage } from './companyclaimverification.page';

describe('CompanyclaimverificationPage', () => {
  let component: CompanyclaimverificationPage;
  let fixture: ComponentFixture<CompanyclaimverificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyclaimverificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyclaimverificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
