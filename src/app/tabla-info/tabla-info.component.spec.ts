import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoComponent } from './tabla-info.component';

describe('TablaInfoComponent', () => {
  let component: TablaInfoComponent;
  let fixture: ComponentFixture<TablaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
