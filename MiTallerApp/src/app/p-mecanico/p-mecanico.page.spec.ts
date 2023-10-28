import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PMecanicoPage } from './p-mecanico.page';

describe('PMecanicoPage', () => {
  let component: PMecanicoPage;
  let fixture: ComponentFixture<PMecanicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PMecanicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
