"use client";

import React from "react";
import LoginForm from "@/components/loginForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
      router.push("/account", { scroll: false });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="w-full max-w-xs">
        <LoginForm onSubmit={handleLogin} />
        <Link href="/register" legacyBehavior>
          <a className="block text-center mt-4 text-blue-600 hover:text-blue-800 select-none cursor-pointer">
            <p>Don&apos;t have an account?</p>
            <p>Register here</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
