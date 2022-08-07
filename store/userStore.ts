import { UserStore } from './types/user';

const userStore = (): UserStore => {
  return {
    userInfo: {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    setUserInfo: function (userInfo) {
      this.userInfo = userInfo;
    },
  };
};

export default userStore;
