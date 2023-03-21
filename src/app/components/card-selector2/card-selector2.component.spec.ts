import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelector2Component } from './card-selector2.component';

describe('CardSelector2Component', () => {
  let component: CardSelector2Component;
  let fixture: ComponentFixture<CardSelector2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelector2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
