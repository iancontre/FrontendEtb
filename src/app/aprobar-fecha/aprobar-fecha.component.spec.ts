import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarFechaComponent } from './aprobar-fecha.component';

describe('AprobarFechaComponent', () => {
  let component: AprobarFechaComponent;
  let fixture: ComponentFixture<AprobarFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobarFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
