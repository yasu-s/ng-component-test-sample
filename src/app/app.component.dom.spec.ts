import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent - DOM Test', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    appService = TestBed.get(AppService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'ng-sample'`, () => {
    expect(component.title).toEqual('ng-sample');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-sample!');
  });
});
