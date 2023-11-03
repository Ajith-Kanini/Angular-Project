import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { UserService } from '../Service/Register/user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['createUser']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form and navigate to Login', () => {
    const user = { userName: 'testUser', mailId: 'test@example.com', password: 'password' };

    userService.createUser.and.returnValue(of(user)); // Mock the createUser method

    component.user = user; // Set the user property

    spyOn(window, 'confirm').and.returnValue(true); // Mock the window.confirm method

    component.onSubmit();

    expect(userService.createUser).toHaveBeenCalledWith(user);
    expect(router.navigate).toHaveBeenCalledWith(['/Login']);
  });

  it('should not navigate to Login if registration is canceled', () => {
    spyOn(window, 'confirm').and.returnValue(false); // Mock the window.confirm method

    component.onSubmit();

    expect(router.navigate).not.toHaveBeenCalled();
  });
});
