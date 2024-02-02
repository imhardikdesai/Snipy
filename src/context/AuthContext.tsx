// ** React Imports
import { createContext, useEffect, useState, ReactNode, useMemo } from "react";

// ** Next Import

// ** Types
import { AuthValuesType, ForgotPasswordParams } from "./types";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  forgotpassword: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<any>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const router = useRouter();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setLoading(true);
      const user = localStorage?.getItem("user");
      if (user) {
        const userStringfy = JSON.stringify(user);
        const userDataJSON = JSON.parse(userStringfy);
        setUser({ ...userDataJSON, uid: JSON.parse(user).uid });
        setLoading(false);
      } else {
        router.push("/sign-in");
        localStorage.removeItem("user");
        setUser(null);
        setLoading(false);
      }

      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          handleLogout(false);
          return;
        }
        setUser(user);
      });
    };
    initAuth();
    // eslint-disable-next-line
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(async (newUser) => {
        if (!newUser.user) return;
        window?.localStorage.setItem("user", JSON.stringify(newUser.user));
        setUser(newUser.user);
        router.replace("/");
        router.refresh();
        if ((await getDoc(doc(db, "users", newUser.user?.uid))).exists())
          return;

        const userProfile = doc(collection(db, "users"), newUser.user?.uid);
        await setDoc(userProfile, {
          uid: newUser.user?.uid,
          email: newUser.user?.email,
          displayName: newUser.user?.displayName,
          photoURL: newUser.user?.photoURL ?? "/assets/avatar.jpg",
        });
      })
      .catch(() => toast.error("Failed to Login"));
  };

  // Forgot Password (Using Email)
  const handleForgotPassword = async (params: ForgotPasswordParams) => {
    console.log(params);
  };

  // Logout (Clear the Session)
  const handleLogout = async (showToast = true) => {
    await auth.signOut();
    setUser(null);
    window?.localStorage.removeItem("user");
    router.push("/sign-in");
    router.refresh();
    showToast && toast.success("Logout Successful");
  };

  const values = useMemo(() => {
    return {
      user,
      loading,
      setUser,
      setLoading,
      login: handleLogin,
      logout: handleLogout,
      forgotpassword: handleForgotPassword,
    };
    // eslint-disable-next-line
  }, [user, loading]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
