import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SanasaPage } from './sanasa.page';

describe('SanasaPage', () => {
  let component: SanasaPage;
  let fixture: ComponentFixture<SanasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SanasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
