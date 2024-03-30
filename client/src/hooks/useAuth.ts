"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { apiClient } from "@/app/api";
import { User, UseAuth } from "@/types/authTypes";

export const useAuth = (): UseAuth => {
  const [user, setUser] = useState<User | null>(null);

  // Function to fetch user profile
  const fetchUserProfile = () => {
    const token = localStorage.getItem("token");
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      apiClient
        .get("/auth/profile")
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Profile fetch failed:", error);
          logout(); // Logout if fetching user profile fails
        });
    }
  };

  // Effect hook for initial load
  useEffect(() => {
    fetchUserProfile();
  }, []); // Run once on component mount

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.post("/auth/login", { email, password });
      if (response.data.access_token && response.data.user) {
        localStorage.setItem("token", response.data.access_token);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${response.data.access_token}`;
        fetchUserProfile(); // Fetch user profile after successful login
        return response.data.user;
      } else {
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Register function
  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
  ) => {
    try {
      const response = await apiClient.post("/user", {
        email,
        password,
        firstName,
        lastName,
        phone,
      });
      // Consider logging in the user after successful registration
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return { user, login, register, logout };
};

export default useAuth;
