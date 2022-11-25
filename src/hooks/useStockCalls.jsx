// import { axiosWithToken } from "../services/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/StockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //!!--------------GETCALLS------------------
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getBrands = () => getStockData("brands");
  const getCategories = () => getStockData("categories");
  const getProducts = () => getStockData("products");

  //!!--------------DELETE CALLS------------------!

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };
  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteBrands = (id) => deleteStockData("brands", id);

  //!!--------------POST CALLS------------------!

  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");
  const postBrands = (info) => postStockData(info, "brands");

  //!!--------------PUT CALLS------------------!

  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be updated`);
    }
  };
  const putFirm = (info) => putStockData(info, "firms");
  const putBrands = (info) => putStockData(info, "brands");
  return {
    getStockData,
    getFirms,
    getSales,
    getBrands,
    getCategories,
    getProducts,
    deleteFirm,
    postFirm,
    postStockData,
    putFirm,
    putStockData,
    putBrands,
    postBrands,
    deleteBrands,
  };
};

export default useStockCalls;
