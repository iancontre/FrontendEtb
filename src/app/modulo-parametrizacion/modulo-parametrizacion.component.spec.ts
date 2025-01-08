import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloParametrizacionComponent } from './modulo-parametrizacion.component';

describe('ModuloParametrizacionComponent', () => {
  let component: ModuloParametrizacionComponent;
  let fixture: ComponentFixture<ModuloParametrizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloParametrizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloParametrizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
