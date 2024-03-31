"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import AccountDetails from "@/components/accountDetails";

const AccountPage = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  /*
  useEffect(() => {
    // Check if the user is still being determined
    if (user === undefined) {
      setIsLoading(true);
    } else if (user) {
      setIsLoading(false);
    } else {
      router.push('/login');
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }
  */

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const goToEditPage = () => {
    history.pushState({ ...user }, "", "/account/edit");
    router.push("/account/edit");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-600 p-4">
      {user && (
        <AccountDetails
          user={user}
          onLogout={handleLogout}
          onEdit={goToEditPage}
        />
      )}
    </div>
  );
};

export default AccountPage;
