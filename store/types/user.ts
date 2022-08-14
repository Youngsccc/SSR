export interface UserInfo {
  id?: string;
  nickName?: string;
  avatar?: string;
  role?: string[];
}

export interface UserStore {
  userInfo: UserInfo;

  setUserInfo: (userInfo: UserInfo) => void;
}
