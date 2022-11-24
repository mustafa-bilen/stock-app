import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";
// import axios from "axios";
// import { fetchFail, fetchStart, getSuccess } from "../features/StockSlice";

const Firms = () => {
  const { getFirms, getSales } = useStockCalls();
  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://13602.fullstack.clarusway.com/";
  // const getFirms = async () => {
  //   const url = "firms";
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });

  //     console.log(data);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail);
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
    getSales();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>

      <Button variant="contained">New Firm</Button>
    </Box>
  );
};

export default Firms;
