"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var member_component_1 = require("./component/member.component");
var core_1 = require("@angular/core");
var pendingmember_component_1 = require("./component/pendingmember.component");
var member_detail_component_1 = require("./component/member-detail.component");
/**
 * Created by billjyc on 2017/2/1.
 */
var routes = [
    { path: '', redirectTo: '/members', pathMatch: 'full' },
    { path: 'members', component: member_component_1.MembersComponent },
    { path: 'pendingmembers', component: pendingmember_component_1.PendingMemberComponent },
    { path: 'detail/:id', component: member_detail_component_1.MemberDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
