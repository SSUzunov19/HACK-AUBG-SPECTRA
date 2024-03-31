export type User = {
  id: string;
  companyName: string;
  email: string;
  password: string;
  about: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
};

export type UseAuth = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    companyName: string,
    email: string,
    password: string,
    about: string,
    facebook: string,
    linkedin: string,
    twitter: string,
    instagram: string
  ) => Promise<void>;
  logout: () => void;
};
