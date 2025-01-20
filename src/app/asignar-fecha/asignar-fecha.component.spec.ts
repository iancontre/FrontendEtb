import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarFechaComponent } from './asignar-fecha.component';

describe('AsignarFechaComponent', () => {
  let component: AsignarFechaComponent;
  let fixture: ComponentFixture<AsignarFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
