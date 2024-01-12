export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type ForgotPasswordParams = {};

export type UserDataType = {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar: string;
  credits: number;
  accessToken?: string | null;
};

export type AuthValuesType = {
  loading: boolean;
  logout: () => any;
  user: any | null;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => any;
  login: () => any;
  forgotpassword: (params: ForgotPasswordParams) => any;
};
