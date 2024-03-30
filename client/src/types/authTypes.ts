export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
};

export type UseAuth = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
  ) => Promise<void>;
  logout: () => void;
};
