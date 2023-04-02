import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CharSpanComponent} from './char-span.component';

describe('CharSpanComponent', () => {
  let component: CharSpanComponent;
  let fixture: ComponentFixture<CharSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharSpanComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show char', () => {
    component.char = 'b';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('b');
  });

});
