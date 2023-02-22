import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCubeComponent } from './swiper-cube.component';

describe('SwiperCubeComponent', () => {
  let component: SwiperCubeComponent;
  let fixture: ComponentFixture<SwiperCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperCubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
