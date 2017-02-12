/**
 * Created by billjyc on 2017/2/5.
 */

export class MemberWeiboData {
  constructor(
    public memberId: number,
    public weiboId: number,
    public weiboFollowerCount: number,
    public weiboFriendsCount: number,
    public weiboStatuesCount: number
  ) {}
}
