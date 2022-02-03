import { Typography } from "@mui/material";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 400px)",
      }}
    >
      <Typography style={{ userSelect: "none" }}>
        <strong>:(</strong> 404 Not Found
      </Typography>
    </div>
  );
}

export default NotFound;
