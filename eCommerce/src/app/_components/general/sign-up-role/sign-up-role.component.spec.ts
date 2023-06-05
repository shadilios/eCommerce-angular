import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpRoleComponent } from './sign-up-role.component';

describe('SignUpRoleComponent', () => {
  let component: SignUpRoleComponent;
  let fixture: ComponentFixture<SignUpRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
