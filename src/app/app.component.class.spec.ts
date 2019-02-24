import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent - Class Test', () => {
  let component: AppComponent;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: AppService, useValue: {} }
      ]
    });

    component = TestBed.get(AppComponent);
    appService = TestBed.get(AppService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'ng-sample'`, () => {
    expect(component.title).toEqual('ng-sample');
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
