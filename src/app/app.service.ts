import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * データモデル(JSONデータ)
 */
export interface JsonData {
  /** ID */
  id: number;
  /** 名称 */
  name: string;
  /** 年齢 */
  age: number;
}

/**
 * サービスクラス
 */
@Injectable({
    providedIn: 'root',
})
export class AppService {

  /** 接続先URL */
  readonly URL = './assets/data.json';

  /**
   * コンストラクタ
   * @param http HttpClient
   */
  constructor(private http: HttpClient) { }

  /**
   * データ取得
   * @returns データモデル
   */
  getData(): Observable<JsonData> {
    return this.http.get<JsonData>(this.URL);
  }

}
