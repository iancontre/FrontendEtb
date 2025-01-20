import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarAsignarComponent } from './aprobar-asignar.component';

describe('AprobarAsignarComponent', () => {
  let component: AprobarAsignarComponent;
  let fixture: ComponentFixture<AprobarAsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobarAsignarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
