import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalokComponent } from './italok.component';

describe('ItalokComponent', () => {
  let component: ItalokComponent;
  let fixture: ComponentFixture<ItalokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItalokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
