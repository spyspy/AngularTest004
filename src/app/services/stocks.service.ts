import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


let stocks: Array<string> = ['TAIEX','TSLA','TSM','AAPL','GOOG','FB','AMZN','TWTR'];
let service:string='https://angular2-in-action-api.herokuapp.com';

export interface StockInterface{
  symbol:string;
  lastTradePriceOnly:number;
  change:number;
  changeInPercent:number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }
  get(){
    //slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
    return stocks.slice();
  }
  add(stock){
    stocks.push(stock);
    return this.get();
  }
  remove(stock){
    stocks.splice(stocks.indexOf(stock),1);
    return this.get();
  }
  load(symbols){
    if(symbols){
      return this.http.get<Array<StockInterface>>(service+'/stocks/snapshot?symbols='+symbols.join());
    }
  }
}
