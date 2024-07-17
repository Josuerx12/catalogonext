"use client";

import {
  IUser,
  TLoginCredentials,
  TRegisterCredentials,
} from "@/interfaces/user";
import { api } from "@/services/api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

type AuthContextProps = {
  user?: IUser;
  login: (credentials: FormData) => Promise<void>;
  register: (credentials: TRegisterCredentials) => Promise<void>;
  getUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>();

  const token = Cookies.get("refreshToken");

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await getUser();
      }
    };
    loadUser();
  }, [token]);

  const getUser = async () => {
    try {
      const res = await api.get("/auth/user");
      const user = res.data.payload.user;

      setUser(user);
    } catch (error: any) {
      api.defaults.headers.common.Authorization = ``;
      throw error.response.data.payload.errors;
    }
  };

  const login = async (credentials: FormData) => {
    try {
      const res = await api.post("/auth/login", credentials);
      const token = res.data.payload.token;

      Cookies.set("refreshToken", token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await getUser();
    } catch (error: any) {
      api.defaults.headers.common.Authorization = ``;
      throw error.response.data.payload.errors;
    }
  };

  const register = async (credentials: TRegisterCredentials) => {
    try {
      const res = await api.post("/auth/register", credentials);
      const token = res.data.payload.token;

      Cookies.set("refreshToken", token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await getUser();
    } catch (error: any) {
      api.defaults.headers.common.Authorization = ``;
      throw error.response.data.payload.errors;
    }
  };

  return (
    <AuthContext.Provider value={{ getUser, login, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Nenhum contexto informado!");
  }

  return context;
};
