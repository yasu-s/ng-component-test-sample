import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        { provide: HttpClient, useValue: {} }
      ]
    });

    service = TestBed.get(AppService);
    http = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('getData', done => {
    // setup
    http.get = jasmine.createSpy().and.returnValue(of({ name: 'hoge' }));

    // exercise
    service.getData().subscribe(data => {
      // verify
      expect(data).toEqual({ name: 'hoge' } as any);
      expect(http.get).toHaveBeenCalled();
      expect(http.get).toHaveBeenCalledWith('./assets/data.json');

      done();
    });
  });
});
