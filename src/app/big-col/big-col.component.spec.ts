import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigColComponent } from './big-col.component';

describe('BigColComponent', () => {
  let component: BigColComponent;
  let fixture: ComponentFixture<BigColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigColComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
