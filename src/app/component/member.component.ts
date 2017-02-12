/**
 * Created by billjyc on 2017/1/25.
 */


import {Component, OnInit} from "@angular/core";
import {MemberService} from "../service/member.service";
import {Router} from "@angular/router";
import {Member} from "../model/member";
import 'rxjs/Rx';
import {Message} from "primeng/components/common/api";

@Component({
  selector: 'member-list',
  moduleId: module.id,
  templateUrl: 'member.component.html',
})

export class MembersComponent implements OnInit {
  ngOnInit(): void {
    this.rows = 20;
    this.page = 1;
    this.memberService.getAllActiveMembers(this.page, this.rows)
      .then(data => {
        this.members = <Member[]> data.rows;
        this.total = data.total;
      });
  }

  members: Member[];
  selectedMember: Member;
  page: number;
  rows: number;
  total: number;

  msgs: Message[] = [];

  constructor(private memberService: MemberService,
              private router: Router) {

  }

  paginate(event:any) {
    this.getMembers2(event.page + 1, event.rows);
  }

  getMembers2(page: number, rows: number) {
    this.rows = rows;
    this.page = page;
    this.memberService.getAllActiveMembers(page, rows)
      .then(result => {
        this.members = <Member[]> result.rows;
        this.total = result.total;
      });
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedMember.id]);
  }

  onSelect(event): void {
    this.goToDetail();
  }
}
