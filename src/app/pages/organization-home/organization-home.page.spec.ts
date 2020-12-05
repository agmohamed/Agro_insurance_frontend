import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizationHomePage } from './organization-home.page';

describe('OrganizationHomePage', () => {
  let component: OrganizationHomePage;
  let fixture: ComponentFixture<OrganizationHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
