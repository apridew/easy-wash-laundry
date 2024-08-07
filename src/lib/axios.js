import axios from "axios";
import { getAuthHeader } from "./helpers";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const postApi = async (url, form, auth) =>
  await axiosInstance.post(url, form, auth);

export const getApi = async (url) =>
  await axiosInstance.get(url, getAuthHeader());

export const deleteApi = async (url) =>
  await axiosInstance.delete(url, getAuthHeader());

export const putApi = async (url, form) =>
  await axiosInstance.put(url, form, getAuthHeader());
