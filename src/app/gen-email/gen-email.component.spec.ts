import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEmailComponent } from './gen-email.component';

describe('GenEmailComponent', () => {
  let component: GenEmailComponent;
  let fixture: ComponentFixture<GenEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenEmailComponent]
    });
    fixture = TestBed.createComponent(GenEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
