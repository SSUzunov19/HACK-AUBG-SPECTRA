"use client";

import React, { useState } from "react";

interface RegisterFormProps {
  onRegister: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
  ) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    let formErrors: FormErrors = {};

    // Email validation
    if (!email.includes("@")) {
      return { email: "Невалиден формат на имейл." };
    } else {
      const parts = email.split("@");
      if (parts.length === 2 && !parts[1].includes(".")) {
        return { email: "Имейлът трябва да съдържа домейн." };
      }
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return {
        password:
          "Паролата трябва да бъде поне 6 символа и да включва поне една главна буква и цифра.",
      };
    }

    // First name validation
    if (!firstName.trim()) {
      return { firstName: "Името е задължително." };
    }

    // Last name validation
    if (!lastName.trim()) {
      return { lastName: "Фамилията е задължителна." };
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      return { phone: "Невалиден телефонен номер. Трябва да бъде 10 цифри." };
    }

    return {};
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onRegister(email, password, firstName, lastName, phone);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Име"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

      <input
        type="text"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

      <input
        type="email"
        placeholder="Имейл"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        placeholder="Парола"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
      >
        Регистрация
      </button>
    </form>
  );
};

export default RegisterForm;
