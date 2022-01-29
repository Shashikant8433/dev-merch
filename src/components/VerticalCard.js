import "./verticalCard.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextRating from "./TextRating";

function VerticalCard({
  cardWidth = 250,
  imageLink,
  productName,
  priceDetails,
  cardHeight = 330,
  wishlist,
  product,
  rating = 3,
  fastDelivery,
}) {
  return (
    <Card
      sx={{
        maxWidth: `${cardWidth}px`,
        maxHeight: `${cardHeight}px`,
      }}
      className="vertical-card"
    >
      <CardMedia
        component="img"
        height="140"
        image={imageLink}
        alt={productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {productName}
          {product && (
            <IconButton
              sx={{ position: "absolute", top: "0", right: "0", color: "red" }}
              aria-label="wishlist"
              size="large"
            >
              <FavoriteBorderIcon />
            </IconButton>
          )}
          {wishlist && (
            <IconButton
              sx={{ position: "absolute", top: "0", right: "0", color: "red" }}
              aria-label="wishlist"
              size="large"
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Typography>
        <Typography
          variant="body2"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "5px",
          }}
        >
          <strong>
            ₹
            {priceDetails?.amount -
              (priceDetails?.discountInPercent * priceDetails?.amount) / 100}
            /-
          </strong>
          <span style={{ color: "gray", textDecoration: "line-through" }}>
            ₹{priceDetails?.amount}/-
          </span>
          <strong style={{ color: "#f75252" }}>
            -{priceDetails?.discountInPercent}%
          </strong>
        </Typography>
        <TextRating
          value={rating}
          align={"left"}
          style={{ fontSize: "16px" }}
        />
        <Typography variant="body2" gutterBottom>
          Delivery: {fastDelivery ? "Within 24 hrs" : "Within 3 days"}
        </Typography>

        <Button size="small" variant="contained">
          {product ? "Add to cart" : "Move to cart"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default VerticalCard;
