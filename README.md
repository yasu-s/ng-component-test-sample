# 概要

Angularのコンポーネントのユニットテストのサンプルです。  
クラスベースのテストとDOMテストの2パターンのテストコードを配置しています。

# 実行環境

* Node.js - 10.x
* Yarn - 1.12.x

# 使用ライブラリ

* Angular - 7.2.x

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-component-test-sample.git
```

## 2. パッケージインストール  

```
cd ng-component-test-sample
yarn
```

## 3. サンプルの起動  

```
yarn test
```

# サンプルソース  

## クラスベーステスト - app.component.class.spec.ts

```typescript
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent - Class Test', () => {
  let component: AppComponent;
  let appService: AppService;

  beforeEach(() => {
    // providers に AppComponent を設定
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
```

## DOMテスト - app.component.dom.spec.ts

```typescript
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
    // compileComponents 後、ComponentFixture 経由で AppComponent を取得
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
```
