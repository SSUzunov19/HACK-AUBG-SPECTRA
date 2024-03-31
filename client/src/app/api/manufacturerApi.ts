import { apiClient } from "@/app/api";

// To get all manufacturers (you already have this one)
export const getManufacturers = async () => {
  const response = await apiClient.get("/company-index");
  console.log(response.data);
  return response.data;
};

// To create a company index
export const createCompanyIndex = async (companyData: any) => {
  const response = await apiClient.post("/company-index", companyData);
  return response.data;
};

// To create many company indices
export const createManyCompanyIndices = async (companiesData: any) => {
  const response = await apiClient.post(
    "/company-index/create-many",
    companiesData
  );
  return response.data;
};

// To get a company index by company name
export const getCompanyIndexByName = async (companyName: any) => {
  const response = await apiClient.get(
    `/company-index/company-name/${companyName}`
  );
  return response.data;
};

// To get a company index by id
export const getCompanyIndexById = async (id: any) => {
  const response = await apiClient.get(`/company-index/${id}`);
  return response.data;
};

// To update a company index by id
export const updateCompanyIndexById = async (id: any, updateData: any) => {
  const response = await apiClient.put(`/company-index/${id}`, updateData);
  return response.data;
};

// To delete a company index by id
export const deleteCompanyIndexById = async (id: any) => {
  const response = await apiClient.delete(`/company-index/${id}`);
  return response.data;
};
