import "./horizontalCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TextRating from "../utils/TextRating";
import DeleteIcon from "@mui/icons-material/Delete";

export default function HorizontalCard({
  categoryTitle,
  categoryType,
  categoryDescription,
  imageLink,
  cart,
}) {
  return (
    <div className="card-container">
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem 0.5rem",
          flexDirection: `${cart ? "row-reverse" : "row"}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            textAlign: `${cart ? "center" : "left"}`,
          }}
          className="horizontal-card-typography"
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
            }}
          >
            <Typography component="div" variant="h5">
              {categoryTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {cart && <>category: {categoryType}</>}
              {cart && (
                <IconButton
                  color="error"
                  sx={{ position: "absolute", top: "0", right: "0" }}
                  aria-label="delete"
                  size="large"
                >
                  <DeleteIcon />
                </IconButton>
              )}
              {!cart && <>{categoryDescription}</>}
              {cart && (
                <>
                  <br /> <TextRating value={3.5} align={"center"} />
                </>
              )}
            </Typography>
            {cart ? (
              <>
                <IconButton aria-label="decrement" size="large">
                  <RemoveOutlinedIcon />
                </IconButton>{" "}
                {0}{" "}
                <IconButton aria-label="increment" size="large">
                  <AddOutlinedIcon />
                </IconButton>
                <br />
                <Button size="small" variant="outlined" sx={{ margin: "4px" }}>
                  Move to wishlist
                </Button>
                <Button size="small" variant="contained" sx={{ margin: "4px" }}>
                  Checkout
                </Button>
              </>
            ) : (
              <Button variant="outlined" size="small">
                Explore category
              </Button>
            )}
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: 151,
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          }}
          image={imageLink}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}
