import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTwitterComponent } from './sign-in-twitter.component';

describe('SignInTwitterComponent', () => {
  let component: SignInTwitterComponent;
  let fixture: ComponentFixture<SignInTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInTwitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
