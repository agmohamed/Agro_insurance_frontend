import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyhistoryPage } from './companyhistory.page';

describe('CompanyhistoryPage', () => {
  let component: CompanyhistoryPage;
  let fixture: ComponentFixture<CompanyhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
