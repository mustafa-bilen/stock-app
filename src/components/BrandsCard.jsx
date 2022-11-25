import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle } from "../styles/globalStyle";
import useStockCalls from "../hooks/useStockCalls";
import { CardHeader } from "@mui/material";
export default function BrandsCard({ brand, setOpen, setInfo }) {
  const { deleteBrands } = useStockCalls();
  return (
    <Card
      sx={{
        p: 2,
        maxWidth: "250px",
        maxHeight: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <CardHeader title={brand?.name} subheader={brand?.address} />
      <CardMedia
        height="325"
        width="250"
        sx={{ p: 1, objectFit: "contain" }}
        component="img"
        alt="brands-image"
        image={brand?.image}
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {brand?.phone}
        </Typography>
      </CardContent> */}
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <EditIcon
          sx={btnHoverStyle}
          onClick={() => {
            setOpen(true);
            setInfo(brand);
          }}
        />

        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteBrands(brand?.id)}
        />
      </CardActions>
    </Card>
  );
}
