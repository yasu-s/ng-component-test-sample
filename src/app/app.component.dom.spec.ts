import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

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
      imports: [
        FormsModule
      ],
      providers: [
        { provide: AppService, useValue: {} }
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

  it('ngOnInit', () => {
    // exercise
    component.ngOnInit();

    // verify
    expect(component.text).toBe('aaa');
  });

  it('onClick', fakeAsync(() => {
    // setup
    appService.getData = jasmine.createSpy().and.returnValue(of({ name: 'hoge' }));

    // exercise
    component.onClick();
    tick();

    // verify
    expect(component.name).toBe('hoge');
  }));
});
