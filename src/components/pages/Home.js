import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function Home() {
  return (
    <>
      <img
        style={{ width: "100%" }}
        src={"https://picsum.photos/900/300"}
        alt="random"
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.8rem",
          margin: "0.5rem 0.8rem",
        }}
      >
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/900/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default Home;
