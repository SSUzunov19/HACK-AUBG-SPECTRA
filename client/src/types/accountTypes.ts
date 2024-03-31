export type UserType = {
  companyName: string;
  email: string;
  phone: string;
  about: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
};

export type AccountDetailsProps = {
  user: UserType;
  onLogout: () => void;
  onEdit: () => void;
};
