import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorasAgendadasPage } from './horas-agendadas.page';

describe('HorasAgendadasPage', () => {
  let component: HorasAgendadasPage;
  let fixture: ComponentFixture<HorasAgendadasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorasAgendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
