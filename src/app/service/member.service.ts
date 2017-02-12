/**
 * Created by billjyc on 2017/1/25.
 */

import {Injectable} from "@angular/core";
import {Headers, Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Member} from "../model/member";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {MemberWeiboData} from "../model/member-weibo-data";

@Injectable()
export class MemberService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private membersUrl = 'http://localhost:8081/girls/member'

  constructor(private http:Http) {

  }

  getAllActiveMembers(page: number, rows: number) {
    const url = `${this.membersUrl}/list`;
    let params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('rows', rows.toString());
    return this.http.get(url, {search: params})
      .toPromise()
      .then(res =>  res.json())
      .then(data => {return data;})
      .catch(this.handleError);
  }

  getPendingMembers() {
    const url = `${this.membersUrl}/list/pending`;
    return this.http.get(url)
      .toPromise()
      .then(res => <Member[]>res.json())
      .then(data => {return data;})
      .catch(this.handleError);
  }

  getMember(id: number) {
    const url = `${this.membersUrl}/list/${id}`;
    return this.http.get(url)
      .map(res => res.json() as Member)
      .catch(this.handleError);
  }

  getWeiboData(id: number) {
    const url = `${this.membersUrl}/weibo/${id}`;
    return this.http.get(url)
      .map(res => res.json() as MemberWeiboData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
