import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MembersComponent} from "./component/member.component";
import {MemberService} from "./service/member.service";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./module/app-routing.module";
import {PendingMemberComponent} from "./component/pendingmember.component";
import {MemberDetailComponent} from "./component/member-detail.component";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {DialogModule} from "primeng/components/dialog/dialog";
import {ButtonModule} from "primeng/components/button/button";
import 'rxjs/add/operator/toPromise';
import {PaginatorModule} from "primeng/components/paginator/paginator";
import {DataGridModule} from "primeng/components/datagrid/datagrid";
import {PanelModule} from "primeng/components/panel/panel";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {PerformanceService} from "./service/performance.service";
import {PerformanceComponent} from "./component/performance/performance.component";
import {CarouselModule} from "primeng/components/carousel/carousel";
import {DataListModule} from "primeng/components/datalist/datalist";
import {ChartModule} from "primeng/components/chart/chart";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {StandingService} from "./service/standing.service";
import {StandingComponent} from "./component/standing/standing.component";

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    PendingMemberComponent,
    MemberDetailComponent,
    PerformanceComponent,
    StandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    DataGridModule,
    DataListModule,
    DropdownModule,
    ChartModule,
    PanelModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    TabViewModule,
    CarouselModule,
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [MemberService, PerformanceService, StandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
