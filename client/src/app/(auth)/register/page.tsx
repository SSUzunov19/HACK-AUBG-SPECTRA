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
    companyName: string,
    email: string,
    password: string,
    phone: string,
    about: string,
    facebook: string,
    linkedin: string,
    twitter: string,
    instagram: string
  ) => {
    try {
      await register(
        companyName,
        email,
        password,
        phone,
        about,
        facebook,
        linkedin,
        twitter,
        instagram
      );

      console.log("Registration successful!");

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
          <p>Have an account?</p>
          <Link href="/login" legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800">Enter from here</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
