export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type AccountDetailsProps = {
  user: UserType;
  onLogout: () => void;
  onEdit: () => void;
};
