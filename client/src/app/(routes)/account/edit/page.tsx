"use client";

import React, { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { updateUser, deleteUser } from "@/app/api/userApi"; // Import the API function

import EditForm from "@/components/editForm";

const myState = history.state;

const EditPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (myState) {
      setEmail(myState.email || "");
      setFirstName(myState.firstName || "");
      setLastName(myState.lastName || "");
      setPhone(myState.phone || "");
    }
    console.log(myState.id);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateUser(myState.id, email, firstName, lastName, phone);
      router.push("/account");
    } catch (error) {
      console.error("Failed to update user:", error);
      // Handle errors here
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(myState.id);
      router.push("/login");
    } catch (error) {
      console.error("Failed to delete user:", error);
      // Handle errors here
    }
  };

  return (
    <div className="container mx-auto p-4">
      <EditForm
        email={email}
        setEmail={setEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EditPage;
