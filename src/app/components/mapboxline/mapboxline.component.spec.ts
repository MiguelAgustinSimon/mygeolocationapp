import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxlineComponent } from './mapboxline.component';

describe('MapboxlineComponent', () => {
  let component: MapboxlineComponent;
  let fixture: ComponentFixture<MapboxlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
