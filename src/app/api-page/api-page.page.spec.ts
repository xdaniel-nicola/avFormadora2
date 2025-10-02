import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiPagePage } from './api-page.page';

describe('ApiPagePage', () => {
  let component: ApiPagePage;
  let fixture: ComponentFixture<ApiPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
