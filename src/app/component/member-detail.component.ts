/**
 * Created by billjyc on 2017/2/1.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Member} from "../model/member";
import {MemberService} from "../service/member.service";
import {ActivatedRoute, Params} from "@angular/router";
import {MemberWeiboData} from "../model/member-weibo-data";
@Component({
  moduleId: module.id,
  selector: 'member-detail',
  templateUrl: 'member-detail.component.html'
})

export class MemberDetailComponent implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(+params['id']))
      .subscribe(member => this.member = member);
    this.route.params
      .switchMap((params: Params) => this.memberService.getWeiboData(+params['id']))
      .subscribe(memberWeiboData => this.memberWeiboData = memberWeiboData);
  }

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {

  }

  formatDate(date2: number) :Date {
    return new Date(date2);
  }

  @Input()
  member: Member;

  memberWeiboData: MemberWeiboData
}
