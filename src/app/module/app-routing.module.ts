import {Routes, RouterModule} from "@angular/router";
import {MembersComponent} from "../component/member.component";
import {NgModule} from "@angular/core";
import {PendingMemberComponent} from "../component/pendingmember.component";
import {MemberDetailComponent} from "../component/member-detail.component";
/**
 * Created by billjyc on 2017/2/1.
 */
const routes: Routes = [
  {path: '', redirectTo: '/members', pathMatch: 'full'},
  {path: 'members', component: MembersComponent},
  {path: 'pendingmembers', component: PendingMemberComponent},
  {path: 'detail/:id', component: MemberDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
