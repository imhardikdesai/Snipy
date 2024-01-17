import React, { ReactNode } from "react";
import GuestGuard from "./GuestGuard";
import AuthSpinner from "@/components/common/AuthSpinner";
import AuthGuard from "./AuthGuard";
import { AUTH_ROUTES, PUBLIC_ROUTES } from "./routes";

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

export const getProperPublicGuardType = (path: string) =>
  PUBLIC_ROUTES.includes(path) ? true : false;

export const getProperAuthGuardType = (path: string) =>
  AUTH_ROUTES.includes(path) ? true : false;

const GuardProvider = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<AuthSpinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<AuthSpinner />}>{children}</AuthGuard>;
  }
};

export default GuardProvider;
