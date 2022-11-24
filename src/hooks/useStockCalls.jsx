import { axiosWithToken } from "../services/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/StockSlice";
const useStockCalls = () => {
  const dispatch = useDispatch();
  const getFirms = async () => {
    const url = "firms";
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/firms/`);
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { getFirms };
};

export default useStockCalls;
