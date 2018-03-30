import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnnouceComponent } from './modal-annouce.component';

describe('ModalAnnouceComponent', () => {
  let component: ModalAnnouceComponent;
  let fixture: ComponentFixture<ModalAnnouceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnnouceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnnouceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
