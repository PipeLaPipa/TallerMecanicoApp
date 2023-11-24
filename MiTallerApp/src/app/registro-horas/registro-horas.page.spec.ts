import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroHorasPage } from './registro-horas.page';

describe('RegistroHorasPage', () => {
  let component: RegistroHorasPage;
  let fixture: ComponentFixture<RegistroHorasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroHorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
