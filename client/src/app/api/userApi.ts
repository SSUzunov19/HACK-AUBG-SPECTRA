import { apiClient } from "@/app/api";

export const updateUser = async (
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
) => {
  const response = await apiClient.put(`/user/${id}`, {
    email,
    firstName,
    lastName,
    phone,
  });
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await apiClient.delete(`/user/${id}`);
  return response.data;
};
