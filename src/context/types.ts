export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
};

export type SignupParams = {
  email: string;
  password: string;
  name: string;
};

export type ForgotpasswordParams = {};

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
  user: UserDataType | null;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => any;
  login: (params: LoginParams) => any;
  signup: (params: SignupParams) => any;
  forgotpassword: (params: ForgotpasswordParams) => any;
};
