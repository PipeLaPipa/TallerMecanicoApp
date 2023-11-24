import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoDetallePage } from './auto-detalle.page';

describe('AutoDetallePage', () => {
  let component: AutoDetallePage;
  let fixture: ComponentFixture<AutoDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
