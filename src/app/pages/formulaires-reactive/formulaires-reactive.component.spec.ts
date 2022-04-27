import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesReactiveComponent } from './formulaires-reactive.component';

describe('FormulairesReactiveComponent', () => {
  let component: FormulairesReactiveComponent;
  let fixture: ComponentFixture<FormulairesReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairesReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairesReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
