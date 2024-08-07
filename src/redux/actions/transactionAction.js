import { toast } from "sonner";
import { getApi, postApi } from "../../lib/axios";
import { getAuthHeader, handleAuthError } from "../../lib/helpers";
import { TYPES } from "../type";

export const getTransactions = async (url, dispatch, navigate) => {
  try {
    const fetch = await getApi(url);
    dispatch({ type: TYPES.SET_TRANSACTIONS, payload: fetch.data.data });
    //   console.log("API GET TRANSACTIONS", fetch.data.data);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const getDetailTransaction = async (id, dispatch, navigate) => {
  try {
    const fetch = await getApi(`/bills/${id}`);
    dispatch({ type: TYPES.SET_TRANSACTION, payload: fetch.data.data });
    // console.log("API GET DETAIL TRANSACTION", fetch.data.data);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};

export const addNewTransaction = async (form, dispatch) => {
  try {
    const fetch = await postApi("/bills", form, getAuthHeader());
    toast.success("Transaction Added Successfully");
    getTransactions("/bills", dispatch);
    dispatch({ type: TYPES.ADD_TRANSACTION, payload: false });
    console.log(fetch);
  } catch (err) {
    handleAuthError(err, navigate);
  }
};
