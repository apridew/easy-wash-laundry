import { toast } from "sonner";
import { deleteApi, getApi, postApi, putApi } from "../../lib/axios";
import { getAuthHeader, handleAuthError } from "../../lib/helpers";
import { TYPES } from "../type";

export const getProducts = async (url, dispatch, navigate) => {
  try {
    const fetch = await getApi(url);
    dispatch({ type: TYPES.SET_PRODUCTS, payload: fetch.data.data });
    // console.log("API GET PRODUCTS", fetch.data.data);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const getDetailProduct = async (id, dispatch, navigate) => {
  try {
    const fetch = await getApi(`/products/${id}`);
    dispatch({ type: TYPES.SET_PRODUCT, payload: fetch.data.data });
    dispatch({ type: TYPES.SET_ID_PRODUCT, payload: id });
    // console.log("API GET DETAIL PRODUCTS", fetch.data.data);
    return fetch.data.data;
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const deleteProduct = async (id) => {
  try {
    const fetch = await deleteApi(`/products/${id}`);
    toast.success("Product Deleted Successfully");
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const addNewProduct = async (form, dispatch) => {
  try {
    const fetch = await postApi("/products", form, getAuthHeader());
    toast.success("Product Added Successfully");
    getProducts("/products", dispatch);
    dispatch({ type: TYPES.ADD_PRODUCT, payload: false });
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const editProduct = async (form, dispatch, navigate) => {
  try {
    const fetch = await putApi("/products", form);
    toast.success("Product Updated Successfully");
    getProducts("/products", dispatch);
    navigate(-1);
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};
