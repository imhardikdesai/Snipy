// ** React Imports
import { createContext, useEffect, useState, ReactNode, useMemo } from "react";

// ** Next Import

// ** Types
import {
  AuthValuesType,
  LoginParams,
  UserDataType,
  SignupParams,
  ForgotpasswordParams,
} from "./types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  forgotpassword: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const authStatus = useSelector((state: RootState) => state.auth.authStatus);

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    initAuth();
    // eslint-disable-next-line
  }, [authStatus]);

  const handleLogin = async (params: LoginParams) => {};
  // Signup Process
  const handleSignup = async (params: SignupParams) => {};

  // Forgot Password (Using Email)
  const handleForgotPassword = async (params: ForgotpasswordParams) => {
    console.log(params);
  };

  // Logout (Clear the Session)
  const handleLogout = async () => {};

  const values = useMemo(() => {
    return {
      user,
      loading,
      setUser,
      setLoading,
      login: handleLogin,
      logout: handleLogout,
      signup: handleSignup,
      forgotpassword: handleForgotPassword,
    };
    // eslint-disable-next-line
  }, [user, loading]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
