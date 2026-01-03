import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionService } from './section-service';

describe('SectionService', () => {
  let component: SectionService;
  let fixture: ComponentFixture<SectionService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
