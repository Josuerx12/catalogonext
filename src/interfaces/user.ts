export interface IUser {
  _id: string;
  name: string;
  email: string;
  photo?: string | null;
  admin: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TLoginCredentials = {
  email: string;
  password: string;
};

export type TRegisterCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
