import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BrandsCard from "../components/BrandsCard";
import useStockCalls from "../hooks/useStockCalls";
import { useState } from "react";
import BrandsModal from "../components/models/BrandsModal";
// import axios from "axios";
// import { fetchFail, fetchStart, getSuccess } from "../features/StockSlice";

const Brands = () => {
  const { getBrands } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

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
    getBrands();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Brands
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Brand
      </Button>

      <BrandsModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      {brands?.length > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {brands?.map((brand, id) => (
            <Grid item key={brand?.id}>
              <BrandsCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Brands;
