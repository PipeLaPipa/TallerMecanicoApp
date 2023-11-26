import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoraDetallePage } from './hora-detalle.page';

describe('HoraDetallePage', () => {
  let component: HoraDetallePage;
  let fixture: ComponentFixture<HoraDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HoraDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
