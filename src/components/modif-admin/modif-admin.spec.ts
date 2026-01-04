import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAdmin } from './modif-admin';

describe('ModifAdmin', () => {
  let component: ModifAdmin;
  let fixture: ComponentFixture<ModifAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
