import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanypolicyverificationPage } from './companypolicyverification.page';

describe('CompanypolicyverificationPage', () => {
  let component: CompanypolicyverificationPage;
  let fixture: ComponentFixture<CompanypolicyverificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanypolicyverificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanypolicyverificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
