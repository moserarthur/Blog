import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarpostComponent } from './criarpost.component';

describe('CriarpostComponent', () => {
  let component: CriarpostComponent;
  let fixture: ComponentFixture<CriarpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
