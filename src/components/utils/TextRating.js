import { Box, Rating } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";

export default function TextRating({ value = 3, align }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: `${align === "center" ? "center" : "flex-start"}`,
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box></Box>
    </Box>
  );
}
