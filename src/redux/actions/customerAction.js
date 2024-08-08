import { toast } from "sonner";
import { deleteApi, getApi, postApi, putApi } from "../../lib/axios";
import { getAuthHeader, handleAuthError } from "../../lib/helpers";
import { TYPES } from "../type";

export const getCustomers = async (url, dispatch, navigate) => {
  try {
    const fetch = await getApi(url);
    dispatch({ type: TYPES.SET_CUSTOMERS, payload: fetch.data.data });
    // console.log("API GET CUSTOMERS", fetch.data.data);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const getDetailCustomer = async (id, dispatch, navigate) => {
  try {
    const fetch = await getApi(`/customers/${id}`);
    dispatch({ type: TYPES.SET_CUSTOMER, payload: fetch.data.data });
    dispatch({ type: TYPES.SET_ID_CUSTOMER, payload: id });
    // console.log("API GET DETAIL CUSTOMERS", fetch.data.data);
    return fetch.data.data;
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const deleteCustomer = async (id, navigate) => {
  try {
    const fetch = await deleteApi(`/customers/${id}`);
    toast.success("Customer Deleted Successfully");
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const addNewCustomer = async (form, dispatch, navigate) => {
  try {
    const fetch = await postApi("/customers", form, getAuthHeader());
    toast.success("Customer Added Successfully");
    getCustomers("/customers", dispatch);
    dispatch({ type: TYPES.ADD_CUSTOMER, payload: false });
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const editCustomer = async (form, dispatch, navigate) => {
  try {
    const fetch = await putApi("/customers", form);
    toast.success("Customer Updated Successfully");
    getCustomers("/customers", dispatch);
    navigate(-1);
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};
