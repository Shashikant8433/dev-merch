import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function TextRating({ value = 3, align, style }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: `${align === "center" ? "center" : "flex-start"}`,
        ...style,
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        style={{ ...style }}
      />
      <Box></Box>
    </Box>
  );
}
