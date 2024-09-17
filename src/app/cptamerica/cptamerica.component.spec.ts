import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptamericaComponent } from './cptamerica.component';

describe('CptamericaComponent', () => {
  let component: CptamericaComponent;
  let fixture: ComponentFixture<CptamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CptamericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
