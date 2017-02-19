import { Component, OnInit } from '@angular/core';
import {MemberPerformanceAppearanceRank} from "../../model/member-performance-appearance";
import {StandingService} from "../../service/standing.service";
import {Title} from "@angular/platform-browser";
import {MemberUtil} from "../../utils/MemberUtil";
import {Router} from "@angular/router";
import {MemberWeiboRank} from "../../model/member-weibo-rank";

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {

  constructor(private rankService: StandingService,
              private titleService: Title,
              private router: Router,) {
    this.titleService.setTitle('排行');
  }

  ngOnInit() {
    this.getPerformanceRank();
    this.getMemberWeiboRank();
  }

  formatTeam(teamId: number) {
    return MemberUtil.formatTeam(teamId);
  }

  getPerformanceRank() {
    this.rankService.getMemberPerformanceAppearanceRank()
      .then(data => {this.memberPerformanceAppearanceRanks = data});
  }

  getMemberWeiboRank() {
    this.rankService.getMemberWeiboRank()
      .then(data => {this.memberWeiboRanks = data});
  }

  memberWeiboRanks: MemberWeiboRank[];
  memberPerformanceAppearanceRanks: MemberPerformanceAppearanceRank[];

}
