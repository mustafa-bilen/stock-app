import { axiosWithToken } from "../services/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/StockSlice";
const useStockCalls = () => {
  const dispatch = useDispatch();

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
  const getProducts = () => getStockData("products");
  const getBrands = () => getStockData("brands");
  const getPurchase = () => getStockData("Purchase");

  return { getFirms, getSales, getProducts, getBrands, getPurchase };
};

export default useStockCalls;
