"use client";

import React, { useState } from "react";

interface RegisterFormProps {
  onRegister: (
    companyName: string,
    email: string,
    password: string,
    phone: string,
    about: string,
    facebook: string,
    linkedin: string,
    twitter: string,
    instagram: string
  ) => void;
}

interface FormErrors {
  companyName?: string;
  email?: string;
  password?: string;
  phone?: string;
  about?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    let formErrors: FormErrors = {};

    // Email validation
    if (!email.includes("@")) {
      return { email: "Invalid email format." };
    } else {
      const parts = email.split("@");
      if (parts.length === 2 && !parts[1].includes(".")) {
        return { email: "The email must contain a domain." };
      }
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return {
        password:
          "Password must be at least 6 characters long and include at least one uppercase letter and one number.",
      };
    }

    return {};
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onRegister(
        companyName,
        email,
        password,
        phone,
        about,
        facebook,
        linkedin,
        twitter,
        instagram,
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 text-black"
    >
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.companyName && (
        <p className="text-red-500">{errors.companyName}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <textarea
        placeholder="About us"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.about && <p className="text-red-500">{errors.about}</p>}

      <input
        type="text"
        placeholder="Facebook"
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.facebook && <p className="text-red-500">{errors.facebook}</p>}

      <input
        type="text"
        placeholder="Linkedin"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.linkedin && <p className="text-red-500">{errors.linkedin}</p>}

      <input
        type="text"
        placeholder="Twitter"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.twitter && <p className="text-red-500">{errors.twitter}</p>}

      <input
        type="text"
        placeholder="Instagram"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {errors.instagram && <p className="text-red-500">{errors.instagram}</p>}

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
      >
        Registration
      </button>
    </form>
  );
};

export default RegisterForm;
