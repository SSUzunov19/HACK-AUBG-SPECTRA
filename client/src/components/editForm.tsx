"use client";

import React, { FormEvent } from "react";

interface EditFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleDelete: () => void;
}

const EditForm: React.FC<EditFormProps> = ({
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  handleSubmit,
  handleDelete,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Имейл
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">Име</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Фамилия
      </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Телефонен номер
      </label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Запази промените
      </button>
      <button
        onClick={handleDelete}
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Изтри акаунта
      </button>
    </form>
  );
};

export default EditForm;
