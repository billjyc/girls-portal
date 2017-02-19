import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MemberPerformanceAppearanceRank} from "../model/member-performance-appearance";
import {MemberWeiboRank} from "../model/member-weibo-rank";

@Injectable()
export class StandingService {

  private rankingUrl = 'http://localhost:8081/girls/rank';
  constructor(private http:Http) { }

  getMemberPerformanceAppearanceRank() {
    const url = `${this.rankingUrl}/performance/appearance`
    return this.http.get(url)
      .toPromise()
      .then(data => <MemberPerformanceAppearanceRank[]> data.json())
      .then(data => {return data;})
      .catch(this.handleError);
  }

  getMemberWeiboRank() {
    const url = `${this.rankingUrl}/weibo/followers`
    return this.http.get(url)
      .toPromise()
      .then(data => <MemberWeiboRank[]> data.json())
      .then(data => {return data;})
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}