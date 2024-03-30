import React from "react";
import { AccountDetailsProps } from "@/types/accountTypes";

const AccountDetails: React.FC<AccountDetailsProps> = ({
  user,
  onLogout,
  onEdit,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold mb-4">Страница на акаунта</h1>
      <p className="mb-2">Имейл: {user.email}</p>
      <p className="mb-2">Име: {user.firstName}</p>
      <p className="mb-2">Фамилия: {user.lastName}</p>
      <p className="mb-4">Телефон: {user.phone}</p>
      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Излизане
      </button>
      <button
        onClick={onEdit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Редактиране на профила
      </button>
    </div>
  );
};

export default AccountDetails;
