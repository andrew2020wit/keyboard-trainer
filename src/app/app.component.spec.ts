import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('title should contain "Keyboard trainer"', () => {
    const element: HTMLElement = TestBed.createComponent(AppComponent).nativeElement;
    const titleSpan = element.querySelector('#title-span');
    expect(titleSpan.textContent).toContain('Keyboard trainer');
  });


});
