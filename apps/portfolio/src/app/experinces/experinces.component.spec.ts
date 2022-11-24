import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperincesComponent } from './experinces.component';

describe('ExperincesComponent', () => {
  let component: ExperincesComponent;
  let fixture: ComponentFixture<ExperincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperincesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
