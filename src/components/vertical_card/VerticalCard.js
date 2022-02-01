import "./verticalCard.css";
import React from "react";
import TextRating from "../utils/TextRating";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";

function VerticalCard({
  cardWidth = 200,
  imageLink,
  productName,
  price,
  discountInPercent,
  cardHeight = 300,
  wishlist,
  product,
  rating = 3,
  fastDelivery,
}) {
  return (
    <Card
      sx={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
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
            ₹{price - (discountInPercent * price) / 100}
            /-
          </strong>
          <span style={{ color: "gray", textDecoration: "line-through" }}>
            ₹{price}/-
          </span>
          <strong style={{ color: "#f75252" }}>-{discountInPercent}%</strong>
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

export default React.memo(VerticalCard);
