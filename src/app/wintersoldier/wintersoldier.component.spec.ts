import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WintersoldierComponent } from './wintersoldier.component';

describe('WintersoldierComponent', () => {
  let component: WintersoldierComponent;
  let fixture: ComponentFixture<WintersoldierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WintersoldierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WintersoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
