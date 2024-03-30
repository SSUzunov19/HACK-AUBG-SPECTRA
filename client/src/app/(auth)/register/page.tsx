"use client";

import React from "react";
import RegisterForm from "@/components/registerForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();
  const { register } = useAuth(); // Destructure register from useAuth

  // Function to handle registration
  const handleRegister = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
  ) => {
    try {
      await register(email, password, firstName, lastName, phone);
      // Handle successful registration, e.g., redirect to login page
      router.push("/login", { scroll: false });
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration errors, e.g., show error message to user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-xs">
        <RegisterForm onRegister={handleRegister} />
        <div className="text-center mt-4">
          <p>Имате акаунт?</p>
          <Link href="/login" legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800">Влезте от тук</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
